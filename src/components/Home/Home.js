import { appConfig } from './../../config';

export const Home = () => {
  return (
    <div className="homepage">
      <p>{appConfig.description}</p>
    </div>
  );
}
