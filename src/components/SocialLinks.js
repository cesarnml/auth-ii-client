import React, { Fragment } from 'react'
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton
} from 'react-social-login-buttons'

const serverURL = 'https://murmuring-reef-62458.herokuapp.com'
// const serverURL = 'http://localhost:8000'

const SocialLinks = props => {
  return (
    <Fragment>
      <FacebookLoginButton
        onClick={() =>
          (window.location.href = `${serverURL}/api/auth/facebook`)
        }
      >
        <span>{props.action} with Facebook</span>
      </FacebookLoginButton>
      <GoogleLoginButton
        onClick={() => (window.location.href = `${serverURL}/api/auth/google`)}
      >
        <span>{props.action} with Google</span>
      </GoogleLoginButton>
      <GithubLoginButton
        onClick={() => (window.location.href = `${serverURL}/api/auth/github`)}
      >
        <span>{props.action} with Github</span>
      </GithubLoginButton>
    </Fragment>
  )
}

export default SocialLinks
