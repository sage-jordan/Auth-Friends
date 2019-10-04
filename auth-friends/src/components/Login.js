import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';

const Login = (props) => {
 const [credentials, setCredentials] = useState({});

const login = e => {
    e.preventDefault();
    axiosWithAuth()
        .post('login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/login');
        })
        .catch(err => console.log(err));
    }

const handleChange = e => {
    setCredentials({
    ...credentials,
    [e.target.name]: e.target.value,
    })
  }

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;