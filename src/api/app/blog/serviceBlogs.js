import axios from "axios";

export const getBlogsApiRequest = async (queries) => {
  return new Promise((resolve, reject) => {
    // console.log("queries", queries);
    const URL = `https://jsonplaceholder.typicode.com/posts`;
    //const defaultRecords = 10;
    // const params = {
    //   page: 1,
    //   limit: defaultRecords,
    // };
    // if (queries) {
    //   if (queries.page) params.page = queries.page;
    //   if (queries.limit) params.limit = queries.limit;
    //   if (queries.search) params.search = queries.search;
    // }
    axios
      .get(URL, { params: { ...queries } })
      .then((response) => {
        if (response.status === 200) {
          // console.log("response.data", response.data);
          resolve(response.data);
        }
      })
      .catch((error) => {
        //   Sentry.captureException(error);
        error.response && error.response.data.message
          ? reject({ message: error.response.data.message })
          : reject({ message: `Something Went Wrong` });
      });
  });
};

export const getBlogById = async (BlogId) => {
  return new Promise((resolve, reject) => {
    // console.log("BlogId api",BlogId);
    const URL = `https://jsonplaceholder.typicode.com/posts/${BlogId}`;
    // console.log("URL",URL);
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          // console.log("res",response.data);
          resolve(response.data);
        }
      })
      .catch((error) => {
        // Sentry.captureException(error);
        error.response && error.response.data.message
          ? reject({ message: error.response.data.message })
          : reject({ message: `Something Went Wrong` });
      });
  });
};
