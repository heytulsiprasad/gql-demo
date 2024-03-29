const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql")

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => 'Hello World is the old standard' }
    })
  })
})

app.use('/graphql', graphqlHTTP ({
  graphiql: true,
  schema: schema
}));

app.listen(5000, () => console.log("Server running on port", 5000))