import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import Checkout from './Components/Checkout/Checkout';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <h2>Orders history</h2>
          </PrivateRoute>
          <PrivateRoute path="/addtocart/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path='/*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}
const Footer = () => {
  return (
    <footer>Developed and maintain By <a href="https://github.com/ishtiak-ahmed">Ishtiak Ahmed</a></footer>
  )
}
export default App;
