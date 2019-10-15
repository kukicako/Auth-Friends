import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const UserForm = (props) => {
  
    const [creds, setCreds] = useState({
      username: '',
      password: '',
    });

    const login = (e) => {
        e.preventDefault();
         axiosWithAuth()
            .post('/api/login', creds)
            .then( res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/myfriends')
            })
        }
    
        const handleChange = e => {
            setCreds({
                ...creds,
                [e.target.name]: e.target.value
            })
        }



return (
    <>
    <div>
    <h1>log in</h1>
      <form login={login}>
        <input
        type="text"
        name="username"
        value={creds.username}
        placeholder="Username"
        onChange={handleChange}
        />
      

        <input
        type="password"
        name="password"
        value={creds.password}
        placeholder="Password"
        onChange={handleChange}
        />
      
        <button>Log In</button>
      </form>
      </div>
    </>
  );
};

