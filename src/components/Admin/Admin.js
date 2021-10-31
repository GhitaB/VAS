import { useAtom } from 'jotai';
import { Forbidden } from './../Forbidden/Forbidden';
import { isLoggedInAtom, currentUserInfoAtom } from './../../state';
import { canAccess } from './../../utils';

export const Admin = () => {
  const [currentUserInfo, ] = useAtom(currentUserInfoAtom);
  const hasAccess = canAccess(currentUserInfo, 'admin');

  return hasAccess ? (
    <div className="admin">
      <h2>Admin</h2>
      <p>Manage users</p>
      <p>Manage posts</p>
      <p>Manage messages</p>
    </div>
  ) : (
    <Forbidden />
  );
}
