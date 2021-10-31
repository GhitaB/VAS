import { useAtom } from 'jotai';
import { isLoggedInAtom, currentUserInfoAtom } from './../../state';
import React, { useEffect } from 'react';
import { canAccess } from './../../utils';
import { Forbidden } from './../Forbidden/Forbidden';

export default function Logout() {
  const [, setLoggedIn] = useAtom(isLoggedInAtom);
  const [currentUserInfo, ] = useAtom(currentUserInfoAtom);

  useEffect(() => {
    setLoggedIn(false);
  });

  return canAccess(currentUserInfo, 'logout') ? (
    <p>Thanks, bye!</p>
  ) : (
    <Forbidden />
  );
}
