import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProvideAuth, PrivateRoute } from "./auth";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Detail from "./pages/Detail";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/detail/:id">
            <Detail />
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <Create />
          </PrivateRoute>
          <PrivateRoute exact path="/update/:id">
            <Update />
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
