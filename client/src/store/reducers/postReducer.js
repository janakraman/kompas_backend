const initialState = {
  posts: [],
  post: {},
  isLoadingPosts: false,
  isLoadingPostDetail: false,
  isLoadingCreate: false,
  isSuccessfulCreate: false,
  isLoadingUpdate: false,
  isSuccessfulUpdate: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload
      }

    case "GET_POST_DETAIL":
      return {
        ...state,
        post: action.payload
      }

    case "SET_LOADING_POSTS":
      return {
        ...state,
        isLoadingPosts: action.payload,
      };

    case "SET_LOADING_POST_DETAIL":
      return {
        ...state,
        isLoadingPostDetail: action.payload,
      };

    case "SET_LOADING_CREATE":
      return {
        ...state,
        isLoadingCreate: action.payload,
      };

    case "SET_SUCCESSFUL_CREATE":
      return {
        ...state,
        isSuccessfulCreate: action.payload,
      };

    case "SET_LOADING_UPDATE":
      return {
        ...state,
        isLoadingUpdate: action.payload,
      };

    case "SET_SUCCESSFUL_UPDATE":
      return {
        ...state,
        isSuccessfulUpdate: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
