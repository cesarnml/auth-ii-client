import React, { Fragment } from 'react'
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton
} from 'react-social-login-buttons'

const SocialLinks = props => {
  return (
    <Fragment>
      <FacebookLoginButton
        onClick={() =>
          (window.location.href = `${
            process.env.REACT_APP_SERVER_URL
          }/auth/facebook`)
        }
      >
        <span>{props.action} with Facebook</span>
      </FacebookLoginButton>
      <GoogleLoginButton
        onClick={() =>
          (window.location.href = `${
            process.env.REACT_APP_SERVER_URL
          }/auth/google`)
        }
      >
        <span>{props.action} with Google</span>
      </GoogleLoginButton>
      <GithubLoginButton
        onClick={() =>
          (window.location.href = `${
            process.env.REACT_APP_SERVER_URL
          }/auth/github`)
        }
      >
        <span>{props.action} with Github</span>
      </GithubLoginButton>
    </Fragment>
  )
}

export default SocialLinks
