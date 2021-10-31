import { useAtom } from 'jotai';
import { Forbidden } from './../Forbidden/Forbidden';
import { isLoggedInAtom, currentUserInfoAtom } from './../../state';
import { canAccess } from './../../utils';

export const MyPage = () => {
  const [currentUserInfo, ] = useAtom(currentUserInfoAtom);
  const hasAccess = canAccess(currentUserInfo, 'my-page');

  return hasAccess ? (
    <div className="my-page">
      <h2>My Page</h2>
      <p>Personal settings</p>
      <p>Messages</p>
    </div>
  ) : (
    <Forbidden />
  );
}
