import { Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <nav className='navigation-main'>
      <ul className='navigation-list'>
        <li className='navigation-item'>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li className='navigation-item'>
          <Link to='/graphite'>Graphite</Link>
        </li>
        <li className='navigation-item'>
          <Link to='/product-services'>Product & Services</Link>
        </li>
        <li className='navigation-item'>
          <Link to='/product-facilities'>Product Facilities</Link>
        </li>

        <li className='navigation-item'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
