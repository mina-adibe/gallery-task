import getCurrentDate from '../../../../utils/getDate';
import { CardProps } from './types';
import './styles.scss';
const Card = ({ title, imgSrc, date }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card__item">
          <img src={imgSrc} alt="image" className="card__img" />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <p className="card__date">{date || getCurrentDate()}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
