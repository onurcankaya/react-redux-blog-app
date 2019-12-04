import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions'

class UserHeader extends React.PureComponent {
  componentDidMount() {
    const { fetchUser, userId } = this.props
    fetchUser(userId)
  }

  render() {
    const { user } = this.props

    if (!user) {
      return null
    }

    return (
      <div>
        <div className="header">{user.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)
