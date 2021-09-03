const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }
  type Post{
   _id: ID
   instrument: String
   description: String
   genre: String 
   title: String 

  }
  type Comment {
   _id: ID
   username: String
   comment: String
   
  }



  type Auth {
    token: ID
    user: User
  }

  type Query {
    users:[User]
    posts:[Post]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(instrument: String!, description:String!, genre: String! title: String! ):Post
    removePost(postId: ID!): Post
    login(email: String!, password: String!): Auth
  }
`;
//In add Post we may need to add user type to add post mutation
module.exports = typeDefs;
