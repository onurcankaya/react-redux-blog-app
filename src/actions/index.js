import { memoize } from 'lodash'
import fetch from '../services/api'

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch)
}

const _fetchUser = memoize(async (id, dispatch) => {
  const response = await fetch.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
})
