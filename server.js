const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./graphql/resolvers')

const schemaPath = ('./schema/index.graphql')

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    introspection: true,
    playground: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
