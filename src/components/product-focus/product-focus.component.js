import Card2 from '../card-2/card-2.component';
import './product-focus.styles.scss';
import than1 from './../../assets/img/mesh/than-1.png';
import than2 from './../../assets/img/mesh/than-2.jpg';
import than3 from './../../assets/img/mesh/than-3.jpg';
import than4 from './../../assets/img/mesh/than-4.jpg';

const ProductFocus = () => {
  return (
    <div className='product-focus container'>
      <div className='card-list'>
        <Card2 imageUrl={than1} name='-100mesh' id={1} />
        <Card2 imageUrl={than2} name='+50mesh' id={2} />
        <Card2 imageUrl={than3} name='+80mesh' id={3} />
        <Card2 imageUrl={than4} name='+100mesh' id={4} />
      </div>
    </div>
  );
};

export default ProductFocus;
