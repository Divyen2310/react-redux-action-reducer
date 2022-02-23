import { GET_BLOG_LOAD, GET_BLOG, GET_BLOG_ERROR } from "../actions/blogACT";

const initialState = { blog: [], loading: false, error: false };

const blogReducer = (state = initialState, action) => {
  // console.log("action", action);
  switch (action.type) {
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

    default:
      return state;
  }
};

export default blogReducer;
