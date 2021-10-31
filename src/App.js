import './vas-theme.scss';
import { appConfig } from './config';
import logo from './images/logo200x200.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  console.log(appConfig);

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <h1>{appConfig.name}</h1>
        <p>{appConfig.description}</p>

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                ABOUT here
              </Route>
              <Route path="/users">
                USERS here
              </Route>
              <Route path="/">
                HOME here
              </Route>
            </Switch>
          </div>
        </Router>

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
