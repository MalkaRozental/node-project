const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const app = express();
var cors = require('cors');
const fs = require('fs')
const { ApolloServer, gql } = require ('apollo-server-express');
const port = 8080;

//use graphql with graphql only
/*app.use(
  "/graphql",
  graphqlHTTP({
  schema: schema,
  graphiql: true,
}));  */


/*app.get('/api/todos', (req, res) => {
    console.log("in get", data);
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );     
    res.send(data);
});*/
//app.use(cors());

const typeDefs = gql(fs.readFileSync('./schema/schema.graphql', {encoding: 'utf8'}));
const resolvers = require('./resolvers');
const apolloServer = new ApolloServer({typeDefs, resolvers});

async function start() {
  await apolloServer.start();
  apolloServer.applyMiddleware({app, path:'/graphql'});

}
start();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});