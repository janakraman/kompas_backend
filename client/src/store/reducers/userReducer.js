const initialState = {
  _id: "",
  username: "",
  email: "",
  password: "",
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return state;

    default:
      return state;
  }
};

export default userReducer;
