const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 3001

mongoose.connect(process.env.DB_ADRESS, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

const dbConnection = mongoose.connection
dbConnection.on('error', (err) => console.error(`Connection error: ${err}`))
dbConnection.once('open', () => console.log('Connected to DB'))

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`Server started on ${PORT} port`)
})
