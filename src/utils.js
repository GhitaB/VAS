import { db } from './fake-database';
import { appConfig } from './config';

export const defaultUserInfo = () => {
  return {
    name: 'anonymous',
    password: '',
    email: '',
    role: 'anonymous'
  }
}

export const getUserInfo = (username) => {
  // Return details about the user
  return db.users[username];
}

export const canAccess = (userInfo, page) => {
  // Check if current user has access permissions in a given context
  const workflow = appConfig.workflow;
  let role = '';

  if(userInfo === undefined || userInfo === {}) {
    role = "anonymous";
  } else {
    role = userInfo.role;
  }
  return workflow[page][role];
}

export const isAdmin = (userInfo) => {
  return userInfo.role === 'admin';
}
