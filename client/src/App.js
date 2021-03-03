import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProvideAuth, PrivateRoute } from "./auth";
// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <ProvideAuth>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
