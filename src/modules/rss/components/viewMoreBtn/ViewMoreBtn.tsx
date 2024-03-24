import { ViewMoreBtnProps } from './types';
import './styles.scss';

const ViewMoreBtn = ({ onClick, disabled }: ViewMoreBtnProps) => {
  return (
    <div className="button-container">
      <button className="btn" onClick={onClick} disabled={disabled}>
        {disabled ? 'Loading...' : 'View More'}
      </button>
    </div>
  );
};

export default ViewMoreBtn;
