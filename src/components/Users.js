import React, { Component } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

class Users extends Component {
  state = {
    user: null,
    users: [],
    loggedIn: false,
    loading: true
  }

  componentDidMount () {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/users`)
      .then(res => {
        const { users, user } = res.data
        this.setState({ user, users, loggedIn: true, loading: false })
      })
      .catch(err =>
        this.setState({ loggedIn: false, loading: false }, () =>
          console.error(err)
        )
      )
  }

  render () {
    const { users, user, loggedIn, loading } = this.state
    return (
      <div className='Users'>
        {loggedIn && !loading ? (
          <div>
            <button
              style={{ marginBottom: 10 }}
              onClick={this.handleButtonClick}
            >
              Logout
            </button>
            <br />
            {user && <img height='100' src={user.photo} alt='profile' />}
            <p>Logged in successfully!</p>
            {users.map(user => <div key={user.id}>{user.email}</div>)}
          </div>
        ) : (
          <div>
            {loading ? (
              <h2>Loading</h2>
            ) : (
              <h2>Route access is restricted. Redirecting to /signin route.</h2>
            )}
            {!loading && !loggedIn && this.redirect()}
          </div>
        )}
      </div>
    )
  }

  redirect = () => {
    setTimeout(() => this.props.history.push('/signin'), 3000)
  }

  handleButtonClick = e => {
    e.preventDefault()
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/auth/logout`)
      .then(res =>
        this.setState({ loggedIn: false, users: [], user: null, loading: true })
      )
      .then(() => this.props.history.push('/signin'))
      .catch(err => console.error(err))
  }
}

export default Users
