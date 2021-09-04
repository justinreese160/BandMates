import { gql } from '@apollo/client';


 export const QUERY_POSTS = gql`
  query posts {
    posts {
     _id  
     instrument
     description
     genre
     title
    }
  }
 `


export const FETCH_QUERY_POSTS = gql`
  query ($postId: ID!) {
    posts(postId: postId) {
     _id  
     instrument
     description
     genre
     title
    }
  }`;