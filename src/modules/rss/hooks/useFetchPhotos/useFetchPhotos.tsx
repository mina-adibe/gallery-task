import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../../../../api/api';
import { Posts } from './types';

const useFetchPhotos = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = React.useState<Posts[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [hasMoreData, setHasMoreData] = React.useState<boolean>(true);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  //check if the limit is set in the url query params and set the default limit
  const limitString = searchParams.get('_limit');
  const defaultLimit = 7;
  const parsedLimit = limitString ? parseInt(limitString) : defaultLimit;
  //check if the page is set in the url query params and set the default page
  const pageString = searchParams.get('_page');
  const defaultPage = 1;
  const parsedPage = pageString ? parseInt(pageString) : defaultPage;

  const [page, setPage] = React.useState<number>(parsedPage);
  const [limit, setLimit] = React.useState<number>(parsedLimit);

  const fetchPhotos = (offset: string) => {
    api
      .get(`photos/${offset}`)
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
  };

  React.useEffect(() => {
    const offsetPath = `?_page=${page}&_limit=${limit}`;
    fetchPhotos(offsetPath);
  }, [page, limit]);

  return { posts, setPosts, page, setPage, limit, setLimit, error, hasMoreData, isFetching };
};

export default useFetchPhotos;
