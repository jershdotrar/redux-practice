import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  // componentDidMount() {
  //   // call action with the userId from the postsReducer in PostList
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const { user } = this.props;
    // there'll be no list of users on the very first render, so let's take care of that right quick
    if(!user) {
      return null;
    }

    return (
      <div className="header">
        {user.name}
      </div>
    );
  }
}

//mapStateToProps has a second optional arg, which is a reference to this component's own props
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
}


export default connect(mapStateToProps)(UserHeader);