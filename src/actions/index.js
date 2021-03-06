import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// need thunk to use async! in thunk we can manually dispatch once the response arrives
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };

  // need a separate api call to retrieve user info
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
  