import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Book = (props) => {
  return (
    <BookWrapper>
      <ImageWrapper>
        <BookImage src={props.imgUrl} alt={props.bookName} />
      </ImageWrapper>
      <BookName>{props.bookName}</BookName>
      <Author>{props.authorName}</Author>
      <GenreWrapper>
        {props.bookGenres.map((item) => (
          <Genre key={item}>{item}</Genre>
        ))}
      </GenreWrapper>
    </BookWrapper>
  )
}

export default Book

Book.propTypes = {
  imgUrl: PropTypes.string,
  bookName: PropTypes.string,
  authorName: PropTypes.string,
  bookGenres: PropTypes.array,
}

const BookWrapper = styled.div`
  width: 180px;
  padding: 15px;
  line-height: 1.25;
`

const ImageWrapper = styled.div`
  width: 150px;
  height: 220px;
  background: lightgrey;
`

const BookImage = styled.img`
  width: 150px;
  max-height: 220px;
  min-height: 220px;
  border-radius: 3px;
  object-fit: cover;
`

const BookName = styled.div`
  padding: 15px 0;
  font-size: 18px;
  font-weight: 500;
`

const Author = styled.div`
  font-size: 14px;
`

const GenreWrapper = styled.div`
  margin-top: 10px;
`

const Genre = styled.div`
  background: #e5e7eb;
  display: inline-block;
  border-radius: 3px;
  padding: 3px 5px;
  margin-right: 3px;
  margin-top: 3px;
  font-size: 12px;
  line-height: 1;
`
