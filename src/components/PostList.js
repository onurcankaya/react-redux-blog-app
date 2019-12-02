import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.PureComponent {
  componentDidMount() {
    console.log(this.props.fetchPosts())
  }

  render() {
    return <div>Post List</div>
  }
}

export default connect(null, { fetchPosts })(PostList)
