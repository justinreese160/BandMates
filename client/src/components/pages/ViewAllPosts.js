import React, { useState, useEffect} from 'react';
import { useQuery } from '@apollo/client'
import { QUERY_POSTS } from '../../utils/queries'
import { Card, Button,Image} from 'semantic-ui-react'

function ViewAllPosts() {

  const { data } = useQuery(QUERY_POSTS)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      console.log("Checking all posts", data)
      setPosts(data.posts)
    }
    },[data])

  return (
    <div>{" "} {posts.map((val,i) => {
      return <div key={i} className="container">
        <Card>
          <Card.Content>  <Image
            floated='right'
            size='mini'
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/522/original/download.jpeg?1630679706'
          />
          
         <Card.Header>Title: {val.title}</Card.Header>
          <Card.Description>
           Instrumrnt: {val.instrument}
            </Card.Description>
            <Card.Description>
              Genre: {val.genre}
            </Card.Description>
          <Card.Description>
             Description: {val.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
              <Button basic color='green'>
            Delete
            </Button>
        </div>
        </Card.Content>
      </Card>
      </div>
    })}
      </div>
    
      
    
  )
}

export default ViewAllPosts;
