import { Link } from "react-router-dom";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center border-bottom mt-5">
        <h1>News</h1>
        <Link to="/create" type="button" className="btn btn-primary">
          Add News
        </Link>
      </div>
      <Posts />
    </div>
  );
}
