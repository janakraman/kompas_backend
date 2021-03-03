import axios from "axios";
import { successToaster, errorToaster } from "../../utils/toaster";
import { getUserHistory } from "./userAction";

export function createBlockchain(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let newChain = await axios({
        url: process.env.REACT_APP_SERVER_URL + "/product",
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: payload.name,
          location: {
            longitude: payload.position.longitude,
            latitude: payload.position.latitude,
          },
          image_url: payload.image_url,
          data: payload.data,
        },
      });
      dispatch({
        type: "UPDATE_BLOCKCHAIN_DETAIL",
        payload: newChain.data,
      });
      dispatch({
        type: "UPDATE_QRCODE_LINK",
        payload: newChain.data._id,
      });
      dispatch(setLoading(false));
      successToaster("Success!", "Information has been sent to your email");
    } catch (error) {
      dispatch(setLoading(false));
      errorToaster("Oops!", error.response.data.message);
      console.log(error.response.data, "error create blockchain");
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
