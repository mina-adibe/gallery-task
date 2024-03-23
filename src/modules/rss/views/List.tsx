import Card from "../components/card/Card";
import "./styles.scss";
import UseFetchPhotos from "../hooks/UseFetchPhotos";
import Header from "../components/header.tsx/Header";
import ViewMoreBtn from "../components/viewMoreBtn/ViewMoreBtn";

const List = () => {
  const { posts, setPage, error, hasMoreData, isFetching } = UseFetchPhotos();

  const blogCards = posts.map((blog) => {
    return (
      <div className="item">
        <Card key={blog.id} title={blog.title} date={blog.date} imgSrc={blog.url} />
      </div>
    );
  });

  const loadMoreBlogs = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="main__container">
      <Header />
      <div className="list__container">{blogCards}</div>
      {hasMoreData ? (
        <ViewMoreBtn onClick={loadMoreBlogs} disabled={isFetching} />
      ) : (
        <div>No more items to load.</div>
      )}
      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default List;
