import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utlis/axiosWithAuth";

const Login = () => {

    const initialState = {
      username: "",
      password: ""
    }

    const [credentials, setCredentials] = useState(initialState)
    const { push } = useHistory();

    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
    }

    const login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/api/login", credentials)
        .then(response => {
          localStorage.setItem('token', JSON.stringify(response.data.payload));
          push('/bubble-page');
        })
        .catch(err => {
          console.log({err})
        })
    }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="formContainer">
                <h1>Login</h1>
                <form onSubmit={login}>
                    <input 
                        className="formInput"
                        placeholder="Username..."
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        className="formInput"
                        placeholder="Password..."
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <br/>
                    <button className="formButton" >Log In</button>
                </form>
            </div>
  );
};

export default Login;
