const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql

const books = [
  { id: 1, name: 'Преступление и наказание', genre: 'Роман', authorID: 1 },
  { id: 2, name: 'Мертвые души', genre: 'Поэма', authorID: 2 },
  {
    id: '3',
    name: '20 000 лье под воодой',
    genre: 'Научно-фантастический роман',
    authorID: 3,
  },
  {
    id: '4',
    name: 'Робур-Завоеватель',
    genre: 'Научно-фантастический роман',
    authorID: 3,
  },
]

const authors = [
  { id: 1, name: 'Федор Достоевский' },
  { id: 2, name: 'Николай Гоголь' },
  { id: 3, name: 'Жюль Верн' },
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authors.find((author) => author.id === parent.authorID)
      },
    },
  }),
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books.filter(book => book.authorID === parent.id)
      },
    },
  }),
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books.find((book) => book.id == args.id)
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find((author) => author.id == args.id)
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent,args) {
        return books
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent,args) {
        return authors
      }
    }
  },
})

module.exports = new GraphQLSchema({
  query: Query,
})
