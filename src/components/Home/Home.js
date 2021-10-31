import { appConfig } from './../../config';

export const Home = () => {
  return (
    <div className="homepage">
      <h2>Welcome!</h2>
      <p>{appConfig.description}</p>
    </div>
  );
}
