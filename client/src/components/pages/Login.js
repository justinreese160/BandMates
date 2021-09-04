import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';
import '../style/login.css';
function Login() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [login, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result)
     
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
      const { data } = await login({
        variables: { ...userFormData },
      });
      console.log('data!! from mutation attempt', data)
   if (data){
     localStorage.setItem("user", data.login.user._id)
     localStorage.setItem("username", data.login.user.username)
     Auth.login(data.login.token);
   }
      
    } catch (err) {
      console.log('WE HAVE ERRR from mutation thing', err)
     console.error(err);
 
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };
  return (
    <div className="form-container">
      <Form onSubmit={handleFormSubmit} noValidate noValidate className={loading ? 'loading' : ''} >
        <h1>Login</h1>
       <Form.Input
          label="Email"
          placholder="Your email address.."
          name="email"
          type="email"
          value={userFormData.email}
          onChange={handleInputChange}
        />
        <Form.Input
          label="Password"
          placholder="Your password.."
          name="password"
          type="password"
          value={userFormData.password}
          onChange={handleInputChange}
        />
        <Button 
          disabled={!(userFormData.email && userFormData.password)}
          type='submit' primary
          variant='success'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login;