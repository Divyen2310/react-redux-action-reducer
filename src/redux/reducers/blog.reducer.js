import {
  GET_BLOG_LOAD, GET_BLOG, GET_BLOG_ERROR,
  // GET_BLOG_LOAD_BY_ID, GET_BLOG_BY_ID, GET_BLOG_BY_ID_ERROR,
} from "../actions/blogACT";

const initialState = { blog: [], entity: [], loading: false, error: false, blogById: "" };

const blogReducer = (state = initialState, action) => {
  // console.log("action", action);
  switch (action.type) {
    ////////// Get Cutomer List ↓ ↓
    case GET_BLOG_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
        message: "",
      };
    case GET_BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
      };
    case GET_BLOG:
      const { response } = action.payload;
      // console.log("hiii",action.payload.response);
      return {
        ...state,
        loading: false,
        error: false,
        message: "",
        entity: response,
        // numberOfCustomer: count,
        newelyAddedCustomer: false,
      };
    // ////////// Get Bloag By ID ↓ ↓ not in use
    // case GET_BLOG_LOAD_BY_ID:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //     message: "",
    //     blogById: "",
    //   };

    // case GET_BLOG_BY_ID:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: false,
    //     message: "",
    //     blogById: action.payload,
    //   };
    // case GET_BLOG_BY_ID_ERROR:
    //   return {
    //     ...state,
    //     error: true,
    //     message: action.payload,
    //   };

    default:
      return state;
  }
};

export default blogReducer;
