import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'semantic-ui-react'
import { ADD_POST } from '../../utils/mutations'
import '../style/CreatePost.css';
function CreatePost() {
  const [formState, setFormState] = useState({
    instrument: '',
    genre: '',
    title: '',
    description: '',
  });
  // Set up our mutation with an option to handle errors
  const [addPost, { loading }] = useMutation(ADD_POST);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const { data } = addPost({
        variables: { ...formState },
      });
      console.log(data);
      window.location.reload();
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
    <div className="form-container">
      <Form onSubmit={handleFormSubmit} noValidate className={loading ? 'loading' : ''}>
        <Form.Field>
          <h1>Create a Post:</h1>
           <Form.Input
            label="Instrument"
            placholder="Instrument.."
            name="instrument"
            value={formState.instrument}
            onChange={handleChange}
          />
          <Form.Input
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
          <Button className="button-form"
            disabled={!{ ...formState }}
            type='submit'
            variant='success'>
            Save Post
          </Button>
        </Form.Field>
      </Form>
    </div>
  )
}
export default CreatePost;



















