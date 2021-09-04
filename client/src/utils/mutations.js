import { gql } from '@apollo/client';

// Login requires email,password
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    username
    
    }
  }
}
`;
// Sing up requires username, email,password
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
       
      }
    }
  }
`;


export const ADD_POST = gql`
 mutation addPost($instrument: String!, $description:String!, $genre: String! $title: String! ) {
  addPost(instrument: $instrument,description:$description, genre:$genre,title:$title)
       {
              _id
              instrument
              description
              genre
              title
           }
      }
  `;


export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
               _id
               instrument
              description
              genre
              title
                        
    }
  }
`;