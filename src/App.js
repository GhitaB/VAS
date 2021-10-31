import './vas-theme.scss';
import { appConfig } from './config';



function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>{appConfig.name}</h1>
        <p>{appConfig.description}</p>

        <div className="box1">
          <p>Test</p>
        </div>
        <div className="box2">
          <p>Test</p>
        </div>
        <div className="box3">
          <p>Test</p>
        </div>
        <div className="box4">
          <p>Test</p>
        </div>
        <div className="box5">
          <p>Test</p>
        </div>
      </div>
    </div>
  );
}

export default App;
