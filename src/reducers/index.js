import { combineReducers } from 'redux'
import { postsReducer } from './posts'

const reducers = combineReducers({
  posts: postsReducer,
})

export default reducers
