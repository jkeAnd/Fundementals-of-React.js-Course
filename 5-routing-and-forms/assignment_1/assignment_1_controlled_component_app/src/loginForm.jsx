import React from "react";
import { useState } from "react";


function LoginForm() {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email.includes('@')) {
      setMessage('Invalid email. It must contain @');   
    }
    else if(password.length < 6) {
      setMessage('Password must be at least 6 characters long.');
    }
    else {
      setMessage('Login Successfull!');
    }
    };

    return (
    <div style={{ maxWidth: '300px', margin: '20px auto' }}> 
    <h2>Login Form</h2>  
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value= {email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        /> <br />

        <label>Password:</label>
        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          />

        <button type="submit">Login</button>
        </form>
        <p>{message}</p>
        </div>

        
      
      
      );
}


export default LoginForm;