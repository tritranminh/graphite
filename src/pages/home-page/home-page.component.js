import Header from '../../components/header/header.component';
import MyImage from '../.././assets/img/corrosive-chemicals.jpg';

import './home-page.styles.scss';
import DescriptionAboutUs from '../../description-component/description-about-us/description-about-us';
import DescriptionGraphite from '../../description-component/description-graphite/description-graphite';
import DescriptionProduct from '../../description-component/description-product/description-product.component';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-page__header'>
        <img alt='corrosive chemicals' src={MyImage} style={{ zIndex: -1 }} />
      </div>

      <DescriptionAboutUs />
      <DescriptionGraphite />
      <DescriptionProduct />
    </div>
  );
};

export default HomePage;
