import fetchAllPosts from '../services/api'

export const fetchPosts = () => async (dispatch) => {
  const response = await fetchAllPosts.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}
