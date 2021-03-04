import axios from "axios";
import { successToaster, errorToaster } from "../../utils/toaster";
import Swal from "sweetalert2";

export function getPosts() {
  return async (dispatch) => {
    try {
      dispatch(setLoadingPosts(true));
      let posts = await axios({
        url: process.env.REACT_APP_SERVER_URL + "/posts",
        method: "GET",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch({
        type: "GET_POSTS",
        payload: posts.data,
      });
      dispatch(setLoadingPosts(false));
    } catch (error) {
      dispatch(setLoadingPosts(false));
      errorToaster(error.response.data.message);
      console.log(error);
    }
  };
}

export function getPostDetail(id) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingPostDetail(true));
      let details = await axios({
        url: process.env.REACT_APP_SERVER_URL + "/posts/" + id,
        method: "GET",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch({
        type: "GET_POST_DETAIL",
        payload: details.data,
      });
      dispatch(setLoadingPostDetail(false));
    } catch (error) {
      dispatch(setLoadingPostDetail(false));
      console.log(error);
    }
  };
}

export function createPost(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingCreate(true));
      let newPost = await axios({
        url: process.env.REACT_APP_SERVER_URL + "/posts",
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: payload.title,
          summary: payload.summary,
          image_url: payload.imageUrl,
          content: payload.content,
        },
      });
      dispatch(getPosts());
      dispatch(setLoadingCreate(false));
      dispatch(setSuccessfulCreate(true));
      dispatch(setSuccessfulCreate(false));
    } catch (error) {
      dispatch(setLoadingCreate(false));
      errorToaster(error.response.data.message[0]);
    }
  };
}

export function updatePost(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingUpdate(true));
      let updated = await axios({
        url: process.env.REACT_APP_SERVER_URL + "/posts/" + payload.id,
        method: "PUT",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          title: payload.title,
          summary: payload.summary,
          image_url: payload.imageUrl,
          content: payload.content,
        },
      });
      dispatch(getPosts());
      dispatch(setLoadingUpdate(false));
      dispatch(setSuccessfulUpdate(true));
      dispatch(setSuccessfulUpdate(false));
    } catch (error) {
      dispatch(setLoadingUpdate(false));
      errorToaster(error.response.data.message[0]);
    }
  };
}

export function deletePost(id) {
  return async (dispatch) => {
    try {
      let result = Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if ((await result).isConfirmed) {
        let deleted = await axios({
          url: process.env.REACT_APP_SERVER_URL + "/posts/" + id,
          method: "DELETE",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        successToaster("Success", "1 item has been deleted");
        dispatch(getPosts());
      }
    } catch (error) {
      console.log(error.response);
      errorToaster(error.response.data.message);
    }
  };
}

function setLoadingPosts(status) {
  return {
    type: "SET_LOADING_POSTS",
    payload: status,
  };
}

function setLoadingPostDetail(status) {
  return {
    type: "SET_LOADING_POST_DETAIL",
    payload: status,
  };
}

function setLoadingCreate(status) {
  return {
    type: "SET_LOADING_CREATE",
    payload: status,
  };
}

function setSuccessfulCreate(status) {
  return {
    type: "SET_SUCCESSFUL_CREATE",
    payload: status,
  };
}

function setLoadingUpdate(status) {
  return {
    type: "SET_LOADING_UPDATE",
    payload: status,
  };
}

function setSuccessfulUpdate(status) {
  return {
    type: "SET_SUCCESSFUL_UPDATE",
    payload: status,
  };
}

function setError(error) {
  return {
    type: "SET_ERROR",
    payload: error,
  };
}
