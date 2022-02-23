import { getBlogsApiRequest } from "../../api/app/blog/serviceBlogs";

// Blog Actions ↓ ↓
export const GET_BLOG_LOAD = "[BLOG] GET_BLOG_LOAD";
export const GET_BLOG = "[BLOG] GET_BLOG";
export const GET_BLOG_ERROR = "[BLOG] GET_BLOG_ERROR";

// export const GET_BLOG_LOAD_BY_ID = "[BLOG] GET_BLOG_LOAD_BY_ID";
// export const GET_BLOG_BY_ID = "[BLOG] GET_BLOG_BY_ID";
// export const GET_BLOG_BY_ID_ERROR = "[BLOG] GET_BLOG_BY_ID_ERROR";
// Blog Actions ↑ ↑

export const getBlogs = (queries) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_BLOG_LOAD,
        payload: {},
      });
      // console.log("queries",queries);
      const response = await getBlogsApiRequest(queries);
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

// export const getBlogDataById = (BlogId) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: GET_BLOG_LOAD_BY_ID,
//         payload: {},
//       });
//       console.log("BlogId",BlogId);
//       const responce = await getBlogById(BlogId);
//       console.log("responce", responce);

//       dispatch({
//         type: GET_BLOG_BY_ID,
//         payload: responce,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_BLOG_BY_ID_ERROR,
//         payload: error.message,
//       });
//     }
//   };
// };
