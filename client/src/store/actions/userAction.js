import axios from "axios";
import { successToaster, errorToaster } from "../../utils/toaster";

export function getUserInfo() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let userInfo = await axios({
        url: process.env.REACT_APP_SERVER_URL + "/user",
        method: "GET",
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setLoading(false));
      dispatch(setError(null));
      dispatch({
        type: "GET_USER",
        payload: userInfo.data,
      });
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error));
      console.log(error.response, "ini error di get user info");
    }
  };
}

function setLoading(status) {
  return {
    type: "SET_LOADING",
    payload: status,
  };
}

function setError(error) {
  return {
    type: "SET_ERROR",
    payload: error,
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
}
