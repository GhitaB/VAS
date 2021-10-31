import './vas-theme.scss';
import { appConfig } from './config';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAtom } from 'jotai';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { pageViewsAtom, isLoggedInAtom } from './state';


function App() {
  const [isLoggedIn, ] = useAtom(isLoggedInAtom);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {!isLoggedIn ? (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                )}
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
