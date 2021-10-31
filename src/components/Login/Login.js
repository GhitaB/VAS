import { useAtom } from 'jotai';
import { isLoggedInAtom } from './state';
import React, { useEffect } from 'react';

const validation = (user, password) => {
  const isValid = true; // TODO...

  return isValid;
}

export default function Login() {
  const [, setLoggedIn] = useAtom(isLoggedInAtom);
  const user = 'User';
  const password = '123456';

  useEffect(() => {
    if (validation(user, password)) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <p>Welcome!</p>
  );
}
