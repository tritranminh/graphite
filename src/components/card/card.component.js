import { Link } from 'react-router-dom';
import './card.styles.scss';

const Card = (props) => {
  return (
    <div className='card-element' key={props.id}>
      <Link to='/product-services'>
        <div className='container-img'>
          <img alt='element' src={props.imageUrl} />
          <div className='blank-black'></div>
        </div>
        <div className='card-content'>{props.name.toUpperCase()}</div>
      </Link>
    </div>
  );
};

export default Card;
