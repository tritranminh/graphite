import { useState } from 'react';
import Card2 from '../../components/card-2/card-2.component';
import ImagePreview from '../../components/image-preview/image-preview.component';
import ProductFocus from '../../components/product-focus/product-focus.component';
import imageProduct from './../../assets/img/1533795374.jpg';

import './product.styles.scss';

const Product = () => {
  const [productStatus, setProductStatus] = useState(() => 'main');
  const [data, setData] = useState();

  return (
    <div className='product'>
      <ImagePreview content='Product & Services' imagePack={imageProduct} />

      <div className='product-main container'>
        <div className='product-options'>
          <div
            className={`product-option ${
              productStatus === 'main' ? 'choose-1' : ''
            }`}
            onClick={() => setProductStatus('main')}
          >
            Flotation Products
          </div>
        </div>

        <div className='product-options'>
          <div
            className={`product-option ${
              productStatus === 'sub' ? 'choose-1' : ''
            }`}
            onClick={() => setProductStatus('sub')}
          >
            Hello world
          </div>
        </div>
      </div>

      <div className='list-product'>
        {productStatus === 'main' ? <ProductFocus /> : ''}
      </div>
    </div>
  );
};

export default Product;
