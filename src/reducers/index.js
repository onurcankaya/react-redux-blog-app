import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { usersReducer } from './users'

const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
})

export default reducers
