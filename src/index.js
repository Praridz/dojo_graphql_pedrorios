const { ApolloServer } = require ("apollo-server");
const PostApi = require("./DataSource/PostAPI")
const typeDefs = require("./schema");
const resolvers = require("./resolvers");


const server = new ApolloServer({
    typeDefs,resolvers, dataSources: () => ({PostApi : new PostApi()}) 
});

server.listen().then(({ url}) => {
    console.log(`Server ready at ${url}`)
})