import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/actions/blogACT";
import { Edit3 } from "react-feather";
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { roles } = useSelector(({ apps: { members } }) => members);
  const { blog } = useSelector((state) => state);
  console.log("blog", blog);

  const [filterData, setFilterData] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    dispatch(getBlogs(filterData));
  }, [dispatch, filterData]);

  // if (blog.loading) {
  //   return <p>Loading . . .</p>;
  // }
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
    {
      name: "Help",
      cell: (row) => {
        return (
          <div onClick={()=>navigate(`/serviceDetails/${row.id}`) }>
            {" "}
            <Edit3 data-tip data-for="helpText" size={20} />
            <ReactTooltip
              id="helpText"
              type="info"
              effect="solid"
              place="right"
            >
              Edit Details
            </ReactTooltip>
          </div>
        );
      },
    },
  ];
  // return <div>{JSON.stringify(blog.entity)}</div>;
  const onChangeRowsPerPage = (newRow) => {
    // console.log("newRow", newRow);
    setFilterData({
      ...filterData,
      _limit: newRow,
    });
  };
  const onChangePage = (newPage) => {
    // console.log("newPage", newPage);
    setFilterData({
      ...filterData,
      _page: newPage,
    });
  };
  return (
    <DataTable
      // for pagination ↓
      pagination
      paginationServer
      paginationTotalRows="100"
      onChangeRowsPerPage={onChangeRowsPerPage}
      onChangePage={onChangePage}
      // for pagination ↑

      // for Loading ↓
      loading={blog.loading}
      // progressPending={blog.loading} 
      progressComponent={<p>Loading . . . </p>}
      // for Loading ↑

      columns={columns}
      data={blog.entity}
    />
  );
};

export default Service;
