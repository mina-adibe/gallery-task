import { useSearchParams } from 'react-router-dom';
import Card from '../components/card/Card';
import Header from '../components/header.tsx/Header';
import ViewMoreBtn from '../components/viewMoreBtn/ViewMoreBtn';
import { Post } from '../hooks/useFetchPhotos/types';
import useFetchPhotos from '../hooks/useFetchPhotos/useFetchPhotos';
import './styles.scss';

const List = () => {
  const { posts, page, setPage, limit, error, hasMoreData, isFetching } = useFetchPhotos();
  const [searchParams, setSearchParams] = useSearchParams();

  // @ts-ignore comment - TODO: fix this
  const blogCards = posts.map((item: Post) => {
    return (
      <div className="item" key={item.id}>
        <Card title={item.title} date={item.date} imgSrc={item.url} />
      </div>
    );
  });

  const loadMoreBlogs = () => {
    setPage((prevPage) => prevPage + 1);
    searchParams.set('_page', page.toString());
    searchParams.set('_limit', limit.toString());

    setSearchParams(searchParams);
  };

  return (
    <section className="main__container">
      <Header />
      <div className="list__container">{blogCards}</div>
      {hasMoreData ? <ViewMoreBtn onClick={loadMoreBlogs} disabled={isFetching} /> : <div>No more items to load.</div>}
      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default List;
