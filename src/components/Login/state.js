import { atom } from 'jotai';
import { defaultUserInfo } from './../../utils';

export const isLoggedInAtom = atom(false);
export const currentUserInfoAtom = atom({});
