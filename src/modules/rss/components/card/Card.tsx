import './styles.scss';
const Card = ({ title, imgSrc }: any) => {
  return (
    <>
      <div className="card">
        <div className="card__item">
          <img src={imgSrc} alt="image" className="card__img" />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__date">14/12/1988</p>
        </div>
      </div>
    </>
  );
};

export default Card;
