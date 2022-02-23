import { getBlogApiRequest } from "../../api/app/blog/service";

// Blog Actions ↓ ↓
export const GET_BLOG_LOAD = "[BLOG] GET_BLOG_LOAD";
export const GET_BLOG = "[BLOG] GET_BLOG";
export const GET_BLOG_ERROR = "[BLOG] GET_BLOG_ERROR";
// Blog Actions ↑ ↑

export const getBlogs = (queries) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_BLOG_LOAD,
        payload: {},
      });

      const response = await getBlogApiRequest(queries);
      // console.log("response 1 ",response);
      // const { count, rows } = response;
      dispatch({
        type: GET_BLOG,
        payload: { response },
        //payload: response old
      });
    } catch (error) {
      dispatch({
        type: GET_BLOG_ERROR,
        payload: error.message,
      });
    }
  };
};
