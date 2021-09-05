import React, { useState, useEffect} from 'react';
import { useQuery } from '@apollo/client'
import { useMutation } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries'
import { Card, Button, Icon} from 'semantic-ui-react'
import { REMOVE_POST } from '../../utils/mutations'
import '../style/allPost.css';
const style = {
  card: {
    margin: "3px",
    fontFamily: "Menlo",
    color: "#fdd05a",
    fontSize: "1vw",
    padding: "5px",
    width: "100%",
    overflow: 'auto',
    height: 300,
    backgroundColor: "#E7DDC6",
    color: "#1A252B",
    borderRadius: "35px",
    boxShadow: "2 3px 10px rgb(0 0 0 / 0.2);"

    
  }

}
function ViewAllPosts() {
const [myId, setmyId]= useState("")
  const { data } = useQuery(QUERY_POSTS)
  const [posts, setPosts] = useState([]);
  useEffect(() => { 
    let id = localStorage.getItem('user')
    setmyId(id)
  },[])
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
  
  
  return (<div style={{ backgroundSize: "cover", margin: "0", height: "400vh", backgroundColor: "#1c2529", width: "100%" }}>
    <div>{" "} {posts.map((val,i) => {
      return <div key={i} className="container">
             <Card style={style.card} >
          <Card.Content>
            <Card.Description style={{ fontSize: "25px", padding: "10px"}}> <strong>Username:</strong> {val.author}</Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px" }}><strong>Title:</strong> {val.title}</Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px" }}>
              <strong>Instrument:</strong>  {val.instrument}
            </Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px"  }}>
              <strong>Genre:</strong> {val.genre}
            </Card.Description>
            <Card.Description style={{ fontSize: "25px", padding: "10px"}}>
              <strong>Description:</strong>  {val.description}
            </Card.Description> 
            <Card.Description style={{ fontSize: "25px", padding: "10px"}}>
              <strong>Contact:</strong>  {val.contact}
            </Card.Description>                     
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            {val.user_id === myId?
                <Button as="div"  color='red' floated="right"  onClick={() => handleDeletePost(val._id)} style={{ width: "5px"}} className="btn">
                  <Icon name="trash" style={{ margin: 0 }}/>
            </Button>:null
              } 
        </div>
            </Card.Content>
            
          </Card>
           </div>
      
    })}
      </div>
    
 </div>
    
  )
}

export default ViewAllPosts;
