import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../store/actions/postAction";

export default function Create() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoadingCreate, isSuccessfulCreate } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (isSuccessfulCreate) {
      history.push("/");
    }
  }, [isSuccessfulCreate]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleSummary(e) {
    setSummary(e.target.value);
  }

  function handleImageUrl(e) {
    setImageUrl(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  function handlePost(e) {
    e.preventDefault();
    const payload = {
      title,
      summary,
      imageUrl,
      content,
    };
    // console.log(payload);
    dispatch(createPost(payload));
  }

  function handleCancel(e) {
    e.preventDefault();
    setTitle("");
    setSummary("");
    setImageUrl("");
    setContent("");
    history.push("/");
  }
  return (
    <div className="container">
      <div className="d-flex mt-5 justify-content-center">
        <div className="w-50 rounded-3 shadow p-5">
          <h1 className="h3 mb-3 fw-normal text-center">Add news</h1>
          <form>
            <div className="row mb-3">
              <label htmlFor="inputTitle" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={(e) => handleTitle(e)}
                  value={title}
                  className="form-control"
                  id="inputTitle"
                  placeholder="Suatu Sore di Pelabuhan Sunda Kelapa"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputSummary" className="col-sm-2 col-form-label">
                Summary
              </label>
              <div className="col-sm-10">
                <textarea
                  type="text"
                  onChange={(e) => handleSummary(e)}
                  value={summary}
                  className="form-control"
                  id="inputSummary"
                  placeholder="Suatu sore yang terik pada pertengahan Februari 2019.."
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputImageUrl"
                className="col-sm-2 col-form-label"
              >
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="url"
                  onChange={(e) => handleImageUrl(e)}
                  value={imageUrl}
                  className="form-control"
                  id="inputImageUrl"
                  placeholder="https://asset.kompas.com/image.JPG"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputContent" className="col-sm-2 col-form-label">
                Content
              </label>
              <div className="col-sm-10">
                <textarea
                  type="text"
                  onChange={(e) => handleContent(e)}
                  value={content}
                  className="form-control"
                  id="inputContent"
                  placeholder="Suatu sore yang terik pada pertengahan Februari 2019, sejumlah remaja naik ke atas kapal layar motor Sinar Keluarga yang bersandar di Pelabuhan Sunda Kelapa, Jakarta Utara."
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              {!isLoadingCreate && (
                <button
                  onClick={(e) => handleCancel(e)}
                  type="submit"
                  className="btn btn-outline-danger mx-1"
                >
                  Cancel
                </button>
              )}
              {isLoadingCreate && (
                <button
                  onClick={(e) => handleCancel(e)}
                  type="submit"
                  className="btn btn-outline-danger mx-1 disabled"
                >
                  Cancel
                </button>
              )}
              {!isLoadingCreate && (
                <button
                  onClick={(e) => handlePost(e)}
                  type="submit"
                  className="btn btn-primary mx-1"
                >
                  Add news
                </button>
              )}
              {isLoadingCreate && (
                <button
                  onClick={(e) => handlePost(e)}
                  type="submit"
                  className="btn btn-primary mx-1 disabled"
                >
                  Add news
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
