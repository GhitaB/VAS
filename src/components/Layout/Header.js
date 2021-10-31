import logo from './../../images/logo200x200.png';
import { appConfig } from './../../config';

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <h1>{appConfig.name}</h1>
      <p>{appConfig.description}</p>
    </div>
  );
}
