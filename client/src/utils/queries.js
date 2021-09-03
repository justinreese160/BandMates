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

