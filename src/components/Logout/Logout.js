import { useAtom } from 'jotai';
import { isLoggedInAtom } from './../../state';
import React, { useEffect } from 'react';

export default function Logout() {
  const [, setLoggedIn] = useAtom(isLoggedInAtom);

  useEffect(() => {
    setLoggedIn(false);
  });

  return (
    <p>Thanks, bye!</p>
  );
}
