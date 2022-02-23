import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/actions/blogACT";

const Service = () => {
  const dispatch = useDispatch();
  // const { roles } = useSelector(({ apps: { members } }) => members);
  const { blog } = useSelector((state) => state);
  console.log("blog", blog);

  useEffect(() => {
    dispatch(getBlogs({ _page: 1, _limit: 10 }));
  }, [dispatch]);

  if (blog.loading) {
    return <p>Loading . . .</p>;
  }
  if (blog.error) {
    return <p>There is Some Error</p>;
  }

  const columns = [
    {
      name: "User Id",
      selector: (row) => row.userId,
    },
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
  ];
  // return <div>{JSON.stringify(blog.entity)}</div>;
  return <DataTable columns={columns} data={blog.entity} />;
};

export default Service;
