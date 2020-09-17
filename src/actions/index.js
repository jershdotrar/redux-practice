import jsonPlaceholder from '../apis/jsonPlaceholder';

// need thunk to use async! in thunk we can manually dispatch once the response arrives
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response });
  };