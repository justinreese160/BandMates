import React, { useState, useEffect} from 'react';
import { useQuery } from '@apollo/client'
import { useMutation } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries'
import { Card, Button} from 'semantic-ui-react'
import { REMOVE_POST } from '../../utils/mutations'
import '../style/allPost.css';
function ViewAllPosts() {

  const { data } = useQuery(QUERY_POSTS)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      console.log("Checking all posts", data)
      setPosts(data.posts)
    }
  }, [data])

  const [removePost] = useMutation(REMOVE_POST);
  const handleDeletePost = async (postId) => {
  console.log(postId)
    try {
      const { data } = await removePost({
        variables: { postId: postId },

      });
      console.log('Delete post', data)
    window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  
  
  return (
    <div>{" "} {posts.map((val,i) => {
      return <div key={i} className="container">
        <Card>
          
          <Card.Content>  
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
           <Button basic color='green' onClick={() => handleDeletePost(val._id)}>
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
