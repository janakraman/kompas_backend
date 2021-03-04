import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/postAction";
import { useHistory } from "react-router-dom";
import { deletePost } from "../store/actions/postAction";

export default function Posts(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts, isLoadingPosts, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  function handleDelete(id){
    dispatch(deletePost(id))
  }

  if (isLoadingPosts) {
    return (
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Summary</th>
            <th scope="col">Author</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{post.title}</td>
                <td>{post.summary}</td>
                <td>{post.User.username}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => history.push(`/detail/${post.id}`)}
                      className="btn btn-outline-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="18px"
                        height="18px"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => history.push(`/update/${post.id}`)}
                      className="btn btn-outline-secondary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="18px"
                        height="18px"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </button>
                    <button type="button" 
                    onClick={() => handleDelete(post.id)}
                    className="btn btn-outline-danger">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        width="18px"
                        height="18px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <p>{JSON.stringify(posts)}</p> */}
    </div>
  );
}
