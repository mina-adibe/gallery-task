import axios from "axios";
import React from "react";
import { baseUrl } from "../../../constants/constants";

const UseFetchPhotos = () => {
  const [posts, setPosts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(7);
  const [error, setError] = React.useState(null);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [isFetching, setIsFetching] = React.useState(false);

  baseUrl;
  React.useEffect(() => {
    setIsFetching(true);
    axios
      .get(`${baseUrl}/?_page=${page}&_limit=${limit}`)
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, ...response.data]);

        if (response.data.length === 0) {
          setHasMoreData(false);
        }
        setIsFetching(false);
      })
      .catch((error) => {
        setIsFetching(false);
        setError(error.message);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [page]);

  // limit, setLimit : you can use it to change the limit of the data in the future
  return { posts, setPosts, page, setPage, limit, setLimit, error, hasMoreData, isFetching };
};

export default UseFetchPhotos;
