import { uniq } from 'lodash'
import fetch from '../services/api'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  const posts = getState().posts
  const userIds = uniq(
    posts.map((post) => {
      return post.userId
    })
  )

  userIds.forEach((id) => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async (dispatch) => {
  const response = await fetch.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}
