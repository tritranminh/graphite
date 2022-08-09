import { Link } from 'react-router-dom';
import CardList from '../../components/card-list/card-list.component';
import dataImg1 from './../../assets/img/graphitepoders.jpg';
import dataImg2 from './../../assets/img/luyenkim.jpg';
import dataImg3 from './../../assets/img/Graphitized-cathode.png';

import './description-product.styles.scss';

const DescriptionProduct = () => {
  const data = [
    {
      id: 1,
      name: 'GRAPHITE POWDERS',
      imageUrl: dataImg1,
      description: 'High Purity and Fineness with Wide Variations',
    },
    {
      id: 2,
      name: 'PASTES',
      imageUrl: dataImg2,
      description:
        'Very soft and lubricative substance which has heat resistant, chemically stable, excellent thermal and electric conductive character.',
    },
    {
      id: 3,
      name: 'GAPHITIZED CATHODE BLOCK',
      imageUrl: dataImg3,
      description: 'Highly Rated by Aluminium Smelters in the World',
    },
  ];
  return (
    <section className='containter preview-product'>
      <div className='content-box__1'>
        <div className='text-content'>
          <Link to='/product-services'>
            <div className='name-tag '>Product & Services</div>
          </Link>
          <hr />
        </div>
        <div className='text-content'>
          <div className='text-element'>
            Based on the characteristic properties of graphite
          </div>
          <div className='text-element'>These are our featured products:</div>
        </div>
        <div className='card-container container'>
          <CardList data={data} />
        </div>
      </div>
    </section>
  );
};

export default DescriptionProduct;
