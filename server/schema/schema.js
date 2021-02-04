const graphql = require('graphql')
const Books = require('../models/book')
const Authors = require('../models/author')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Authors.findById(parent.authorID)
      },
    },
  }),
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Books.find({ authorID: parent.id })
      },
    },
  }),
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorID: { type: GraphQLID },
      },
      resolve(parent, args) {
        const book = new Books({
          name: args.name,
          genre: args.genre,
          authorID: args.authorID,
        })
        return book.save()
      },
    },
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const author = new Authors({
          name: args.name,
        })
        return author.save()
      },
    },
    deleteBook: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Books.findByIdAndRemove(args.id)
      },
    },
    deleteAuthor: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Authors.findByIdAndRemove(args.id)
      },
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorID: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Books.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              genre: args.genre,
              authorID: args.authorID,
            },
          },
          { new: true }
        )
      },
    },
    updateAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Authors.findByIdAndUpdate(
          args.id,
          { $set: { name: args.name } },
          { new: true }
        )
      },
    },
  },
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getBook: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Books.findById(args.id)
      },
    },
    getAuthor: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Authors.findById(args.id)
      },
    },
    getBooks: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Books.find({})
      },
    },
    getAuthors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Authors.find({})
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})
