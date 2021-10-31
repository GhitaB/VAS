import { useAtom } from 'jotai';
import { isLoggedInAtom } from './state';
import React, { useEffect } from 'react';
import { useRef, useState } from "react";

const validate = (user, password) => {
  return (user === 'admin' && password == '123456'); // TODO haha, we are safe now
}

export default function Login() {
  const [isLoggedIn, setLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   if (validation(user, password)) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  const handleUserInputChange = (e) => {
    setUser(e.target.value);
  }

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  }

  const loginValidation = (e) => {
    if(validate(user, password)) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  return (
    <div className="login-form">
      <h3>Login</h3>
      {!isLoggedIn ? (
        <div className="login-info">
          <label for="user">Username:</label>
          <input type="text" id="user" name="user" value={ user } onChange={ handleUserInputChange } />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" value={ password } onChange={ handlePasswordInputChange } />
          <button onClick={ loginValidation }>Login</button>
        </div>
      ) : (
        <p>Welcome!</p>
      )}
    </div>
  );
}
