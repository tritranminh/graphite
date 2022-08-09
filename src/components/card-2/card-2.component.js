import { Link } from 'react-router-dom';
import './card-2.styles.scss';

const Card2 = (props) => {
  return (
    <div className='card-element-2' key={props.id}>
      <Link to='/contact'>
        <div className='container-img'>
          <img alt='element' src={props.imageUrl} />
          <div className='blank-black'></div>
        </div>
        <div className='card-content'>{props.name.toUpperCase()}</div>

        <div className='contact-us'>Contact Us</div>
      </Link>
    </div>
  );
};

export default Card2;
