import { db } from './fake-database';

export const getUserInfo = (username) => {
  return db.users[username];
}
