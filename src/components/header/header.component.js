import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation.component';
import { ReactComponent as Logo } from './../../assets/svg/logo.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header '>
      <div className='header-menu container'>
        <Link to='/' className='logo'>
          <Logo />
        </Link>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
