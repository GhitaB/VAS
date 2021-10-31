import './vas-theme.scss';
import { appConfig } from './config';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAtom } from 'jotai';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './components/Home/Home';
import { MyPage } from './components/MyPage/MyPage';
import { Admin } from './components/Admin/Admin';
import { isLoggedInAtom, currentUserInfoAtom } from './state';
import { isAdmin } from './utils';

function App() {
  const [isLoggedIn, ] = useAtom(isLoggedInAtom);
  const [currentUserInfo, ] = useAtom(currentUserInfoAtom);
  const hasAccess = isAdmin(currentUserInfo);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link to="/my-page">My page</Link>
                      </li>
                      {hasAccess ? (
                        <li>
                          <Link to="/admin">Admin</Link>
                        </li>
                      ) : null}
                      <li>
                        <Link to="/logout">Logout</Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                </ul>
              </nav>

              <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/my-page"><MyPage /></Route>
                <Route path="/admin"><Admin /></Route>
                <Route path="/logout"><Logout /></Route>
                <Route path="/"><Home /></Route>
              </Switch>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
