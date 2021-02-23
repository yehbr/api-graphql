import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Author = (props) => {
  return (
    <AuthorWrapper>
      <AuthorImage src={props.imgUrl} alt={props.authorName} />
      <AuthorName>{props.authorName}</AuthorName>
    </AuthorWrapper>
  )
}

Author.propTypes= {
  imgUrl: PropTypes.string,
  authorName: PropTypes.string
}

const AuthorWrapper = styled.div`
  margin: 15px;
  width: 100px;
  line-height: 1.25;
`

const AuthorImage = styled.img`
  width: 100px;
  height: 100px;
  min-height: 100px;
  border-radius: 3px;
  background: lightgrey;
  object-fit: cover;
`

const AuthorName = styled.div`
  min-height: 37px;
  margin-top: 10px;
`

export default Author
