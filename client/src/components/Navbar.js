import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const auth = useAuth();
  const history = useHistory();
  function handleLogout() {
    auth.signout(() => {
      console.log("logout");
      history.push("/login");
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <Link to="/" className="navbar-brand ">
          Kompas Backend
        </Link>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            {localStorage.access_token && (
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            )}
            {!localStorage.access_token && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
