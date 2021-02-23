import React from 'react'
import ExternalLink from '../components/@common/ExternalLink'

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        This is a education project for up skills. Used technologies on app.<br />
        Front-end — React, GraphQL, Apollo. Back-end — Express, GraphQL, MongoDB.
      </p>
      <ExternalLink href="https://github.com/yehbr/my-library">GitHub</ExternalLink>
    </>
  )
}

export default AboutPage
