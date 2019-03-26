import express from 'express';
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema/'
import resolvers from './graphql/resolvers/'
const PORT = 3000;

const app = express(); 
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))


app.get("*", (req, res) => {
  res.json({
     name: "Welcome to Express"
   }) 
})


app.listen(PORT, () => {
  console.log(`App running in port ${PORT}`)
})