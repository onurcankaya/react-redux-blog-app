import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.PureComponent {
  componentDidMount() {
    console.log(this.props.fetchPosts())
  }

  render() {
    const { posts } = this.props

    if (!posts) {
      return <div>No posts</div>
    }
    console.log(posts)
    return <div>Post List</div>
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)
