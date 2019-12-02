import jsonPlaceholder from '../services/api'

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder

  dispatch({ type: 'FETCH_POSTS', payload: response })
}
