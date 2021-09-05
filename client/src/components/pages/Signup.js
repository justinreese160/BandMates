import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';
import '../style/login.css';
function Signup() {
  // set initial form state
  const [errors, setErrors] = useState({});
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
   const [addUser, { loading}] = useMutation(ADD_USER, {
    update(_, result) {
       console.log(result)
       
     },
     onError(err) {
       setErrors(err.graphQLErrors[0].extensions.exception.errors)
       console.log(err.graphQLErrors[0].extensions.exception.errors)
     },
    variable: { ...userFormData }

  });
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log('data!! from mutation attempt', data)
    
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log('WE HAVE ERRR from mutation thing', err)
      console.error(err);
        }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };
  return (
    <div style= {{fontFamily:"Menlo",backgroundSize:"cover", margin:"0",height:"200vh" ,backgroundImage:"url('https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/662/original/clem-onojeghuo-vOBnbyzA_XA-unsplash.jpg?1630871538')",width:"100%" }}>
    <div className="form-container">
      <Form onSubmit={(e) => {handleFormSubmit(e)}} className={loading ? 'loading' : 'classless'}>
        <h1 style = {{fontFamily:"Sacco Condensed", fontSize:"4vw", letterSpacing:".5vw", textShadow:"-2.5px 1px 2px #000"}}>Sign Up</h1>
        <Form.Input
          label="Username"
          placholder="Your username.."
          name="username"
          type="username"
          // error={errors.username ? true : false}
          value={userFormData.username}
          onChange={handleInputChange}
        />
        <Form.Input
          label="Email"
          placholder="Your email address.."
          name="email"
          type="email"
          // error={errors.email ? true : false}
          value={userFormData.email}
          onChange={handleInputChange}
        />
        <Form.Input
          label="Password"
          placholder="Your password.."
          name="password"
          type="password"
          // error={errors.password ? true : false}
          value={userFormData.password}
          onChange={handleInputChange}
        />
        <Button style = {{backgroundColor:"#152238",color:"#fdd05a"}}
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'primary
          variant='success'>
          Submit
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="List">{Object.values(errors).map(value => (
            <li key={value}>{value}</li>
          ))}</ul>
        </div>
      )}
    </div>
    </div>
  )
}

export default Signup;