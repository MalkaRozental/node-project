/*const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema,  GraphQLID, GraphQLList } = graphql;
let todos = require('../data/todo.json');
const _ = require('lodash')


const TodoType = new GraphQLObjectType({
    name: 'Todos',
    fields: () => ({
        text: { type: GraphQLString },
        checked: { type: GraphQLBoolean }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        status: {
            type: GraphQLString,
            resolve(parent, args){
                return "Welcome to GraphQL"
            }
        },
        todo:{
            type: new GraphQLList(TodoType),
            resolve(parent, args){
                console.log("malka datda ", todos.data)
                return (todos.data);
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});*/
const { gql } = require('apollo-server');

const typeDefs = gql`
type Todo {
    text: String
    checked: Boolean!
  },
  type Query {
    todos: Todo
  }
   
`;

module.exports = typeDefs;

  
