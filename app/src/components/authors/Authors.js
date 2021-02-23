import React from 'react'
import styled from 'styled-components'
import Author from '../authors/Author'

const Authors = () => {
  return (
    <AuthorsWrapper>
      {authors.map((item) => (
        <Author
          key={item.id}
          authorName={item.authorName}
          imgUrl={item.imgUrl}
        />
      ))}
    </AuthorsWrapper>
  )
}

export default Authors

const AuthorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`

const authors = [
  {
    id: '1',
    authorName: 'Jules Verne',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jules_Verne_by_%C3%89tienne_Carjat.jpg/225px-Jules_Verne_by_%C3%89tienne_Carjat.jpg',
  },
  {
    id: '2',
    authorName: 'Feudor Dostoevsky',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dostoevsky_1879.jpg/180px-Dostoevsky_1879.jpg',
  },
  {
    id: '3',
    authorName: 'Aditya Y. Bhargava',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51B9HnCqawL.jpg',
  },
  {
    id: '4',
    authorName: 'Nikolay Gogol',
    imgUrl:
      'https://cdn.britannica.com/s:250x250,c:crop/50/160750-050-36D9A41C/Nikolay-Gogol-print.jpg',
  },
]
