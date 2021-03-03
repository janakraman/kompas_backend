import { useState } from "react";
import { useAuth } from "../auth";
import { useHistory, useLocation } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  let { from } = location.state || { from: { pathname: "/" } };

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let payload = {
      username,
      password,
    };
    auth.signin(payload, () => {
      history.replace(from);
    });
  };

  return (
    <div className="container">
      <div className="d-flex mt-5 text-center justify-content-center">
        <div className="w-50 rounded-3 shadow p-5">
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <form onSubmit={handleLogin}>
            <div className="mt-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Username
                </span>
                <input
                  onChange={(e) => handleUsername(e)}
                  value={username}
                  type="text"
                  class="form-control"
                  placeholder="admin"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
            <div className="my-3">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Password
                </span>
                <input
                  onChange={(e) => handlePassword(e)}
                  value={password}
                  type="password"
                  class="form-control"
                  placeholder="adminkompas"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
          <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
        </div>
      </div>
    </div>
  );
}
