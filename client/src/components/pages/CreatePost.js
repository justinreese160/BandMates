import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'semantic-ui-react'
import { ADD_POST } from '../../utils/mutations'
import '../style/CreatePost.css';

function CreatePost() {
  const [formState, setFormState] = useState({
    user_id: '',
    author: '',
    instrument: '',
    genre: '',
    title: '',
    description: '',
    contact: '',
  });
  const [user, setUser] = useState({})
  // Set up our mutation with an option to handle errors
  const [addPost, { loading }] = useMutation(ADD_POST);
  useEffect(()=>{
    const author = {
    id:localStorage.getItem("user"), 
    username: localStorage.getItem("username")
    }
   setFormState({...formState, user_id: author.id, author: author.username})
  },[])
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try {
      const { data } = await addPost({
        variables: { ...formState },
      });
      console.log(data);
      if (data){
        alert("post saved")
      
      window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'username') {
      setFormState({ ...formState, [name]: value });
     
    } 
    
  };
  return (
    <div className="ui formLabel"style= {{fontFamily:"Menlo",backgroundSize:"cover", margin:"0",height:"200vh" ,backgroundImage:"url('https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/660/original/trevor-hayes-HQHeOGmGYvg-unsplash.jpg?1630871006')",width:"100%" }}>
    <div className="form-container" >
        <Form onSubmit={handleFormSubmit} noValidate className={loading ? 'loading' : ''} style={{ color: "white" }}>
        <Form.Field style={{color:"#ffd036"}}>
          <h1>Create a Post:</h1>
            <Form.Input style={{color:"#ffd036"}}className="instrument" style={{ color: "white" }}
            label= "Instrument" 
            placholder="Instrument.."
            name="instrument"
            value={formState.instrument}
            onChange={handleChange}
          />
          <Form.Input
          style={{color:"#ffd036"}}
            label="Genre"
            placholder="Genre.."
            name="genre"
            value={formState.genre}
            onChange={handleChange}
          />
          <Form.Input 
            label="Title"
            placholder="Title.."
            name="title"
            value={formState.title}
            onChange={handleChange}
          />
          <Form.Input className="discription-form"
            label="Description"
            placholder="Description.."
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
           <Form.Input 
            label="Contact"
            placholder="contact.."
            name="contact"
            value={formState.contact}
            onChange={handleChange}
          />
          <Button className="button-form"
            disabled={!{ ...formState }}
            type='submit'
            variant='success'>
            
            Save Post
          </Button>
          
        </Form.Field>
      </Form>
    </div>
    </div>
  )
}

export default CreatePost;



















