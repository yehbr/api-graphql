import React from 'react'
import styled from 'styled-components'
import Book from './Book'

const Books = () => {
  return (
    <BookWrapper>
      {books.map((item) => (
        <Book
          key={item.bookName}
          bookName={item.bookName}
          authorName={item.authorName}
          imgUrl={item.imgUrl}
          bookGenres={item.bookGenres}
        />
      ))}
    </BookWrapper>
  )
}

export default Books

const BookWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`

const books = [
  {
    bookName: 'Crime and punishment',
    authorName: 'Feudor Dostoevsky',
    imgUrl:
      'https://i.pinimg.com/originals/de/43/b6/de43b681d156f7cf3cfcc6625f2166c3.jpg',
    bookGenres: ['Crime fiction', 'Crime', 'Phantastic', 'Fashion'],
  },
  {
    bookName: 'Grokking algorithms',
    authorName: 'Aditya Y. Bhargava',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51cV560hqBL._SX396_BO1,204,203,200_.jpg',
    bookGenres: ['Programming', 'Algorithms', 'Education'],
  },
  {
    bookName: '20000 Leagues under the sea',
    authorName: 'Jules Verne',
    imgUrl: 'https://images.penguinrandomhouse.com/cover/9780553212525',
    bookGenres: ['Crime fiction', 'Crime', 'Phantastic'],
  },
]
