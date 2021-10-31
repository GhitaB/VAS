import './vas-theme.scss';
import { appConfig } from './config';
import logo from './images/logo200x200.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { atom, useAtom } from 'jotai';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

const pageViewsAtom = atom(0)
const isLoggedInAtom = atom(false)

function App() {
  console.log(appConfig);

  const [pageViews, setPageViews] = useAtom(pageViewsAtom);
  const [isLoggedIn, setLoggedIn] = useAtom(isLoggedInAtom);

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <h1>{appConfig.name}</h1>
        <p>{appConfig.description}</p>
        <p>Page views: {pageViews}</p>

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/" onClick={() => setPageViews(c => c + 1)}>Home</Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => setPageViews(c => c + 1)}>Login</Link>
                </li>
                <li>
                  <Link to="/logout" onClick={() => setPageViews(c => c + 1)}>Logout</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/">
                Homepage
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
