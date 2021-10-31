import { useAtom } from 'jotai';
import { isLoggedInAtom } from './state';
import { useState } from "react";
import { getUserInfo } from "./../../utils";

const validate = (user, password) => {
  const userInfo = getUserInfo(user);
  let isValid = true;
  let msg = 'Login success';

  if (userInfo === undefined) {
    isValid = false;
    msg = "User not found.";
  } else {
    if (userInfo.password !== password) { // TODO never expose passwords this way, to be done on server side
      isValid = false;
      msg = "Incorrect password."
    }
  }

  if (isValid) {
    console.log("Found - Name: ", userInfo.name, " Email: ", userInfo.email, " Role: ", userInfo.role);
  }

  return {
    isValid: isValid,
    msg: msg,
  }
}

export default function Login() {
  const [isLoggedIn, setLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [message, setMessage] = useState('');

  const handleUserInputChange = (e) => {
    setUser(e.target.value);
  }

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  }

  const loginValidation = (e) => {
    const {isValid, msg} = validate(user, password);
    console.log(msg);
    setMessage(msg);

    if(isValid) {
      setHasErrors(false);
      setLoggedIn(true);
    } else {
      setHasErrors(true);
      setLoggedIn(false);
    }
  }

  return (
    <div className="login-form">
      <h3>Login</h3>
      {!isLoggedIn ? (
        <div className="login-info">
          {hasErrors ? (
            <p className="msg-error">{message}</p>
          ) : null }
          <label htmlFor="user">Username:</label>
          <input type="text" id="user" name="user" value={ user } onChange={ handleUserInputChange } />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={ password } onChange={ handlePasswordInputChange } />
          <button onClick={ loginValidation }>Login</button>
        </div>
      ) : (
        <p className="msg-sucess">{message}</p>
      )}
    </div>
  );
}
