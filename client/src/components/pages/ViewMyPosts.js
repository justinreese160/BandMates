import React, { useState, useEffect} from 'react';
import { useQuery } from '@apollo/client'
import { useMutation } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries'
import { Card, Button,Icon} from 'semantic-ui-react'
import { REMOVE_POST } from '../../utils/mutations'
import '../style/allPost.css';
function ViewAllPosts() {

  const { data } = useQuery(QUERY_POSTS)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      const myId = localStorage.getItem("user")
      console.log("Checking all posts", data)
      let myposts = data.posts.filter(post => {
        console.log(post)
        return post.user_id === myId
      })
      console.log(myposts)
      setPosts(myposts)
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
   
  return (<div style={{ backgroundSize: "cover", margin: "0", height: "200vh", backgroundColor: "#1c2529", width: "100%" }}>
    <div>{" "} {posts.map((val,i) => {
      return <div key={i} className="container">
        <Card style={{ margin: "3px", fontFamily: "Menlo", color: "#fdd05a", fontSize: "1vw", padding: "5px", width: "100%", overflow: 'auto', height: 300  }}> 
          <Card.Content>
            <Card.Description style={{ fontSize: "25px", padding: "10px" }}> <strong>Username:</strong> {val.author}</Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px" }}><strong>Titlt:</strong> {val.title}</Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px" }}>
              <strong>Instrumrnt:</strong> {val.instrument}
            </Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px" }}>
              <strong>Genre:</strong>{val.genre}
            </Card.Description>
            <Card.Description style={{ fontSize: "20px", padding: "10px" }}>
              <strong>Description:</strong> {val.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
              <Button as="div" color='red' floated="right" onClick={() => handleDeletePost(val._id)}>
                <Icon name="trash" style={{ margin: 0 }} />
            </Button>
        </div>
            </Card.Content>          
        </Card>
     
      </div>
    })}
      </div>
    </div >
    
  )
}

export default ViewAllPosts;