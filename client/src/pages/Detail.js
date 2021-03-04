import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../store/actions/postAction";
import { dateFormatLong } from "../utils/dateFormat";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { post, isLoadingPostDetail } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetail(id));
  }, []);

  if (isLoadingPostDetail) {
    return (
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center border-bottom mt-5">
        <div>
          <h1>{post?.title}</h1>
          <p className="text-muted">
            {post?.User?.username} - {dateFormatLong(post?.createdAt)}
          </p>
        </div>
        <Link to="/">Back to Home</Link>
      </div>
      <div className="mt-3">
        <img
          src={post?.image_url}
          class="img-fluid rounded"
          alt={post?.title}
        ></img>
      </div>
      <div className="mt-3 mb-5">
        <p>{post?.content}</p>
      </div>
    </div>
  );
}
