import { gql } from '@apollo/client';


 export const QUERY_POSTS = gql`
  query posts {
    posts {
      author
      user_id
     _id  
     instrument
     description
     genre
     title
     contact
    }
  }
 `


export const QUERY_MYPOSTS = gql`
  query ($postId: ID!) {
    posts(postId: postId) {
      author
      user_id
     _id  
     instrument
     description
     genre
     title
     contact
    }
  }`;

 