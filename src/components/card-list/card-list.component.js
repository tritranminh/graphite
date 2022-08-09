import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList = ({ data }) => {
  return (
    <div className='card-list'>
      {data.map((el) => (
        <Card
          id={el.id}
          imageUrl={el.imageUrl}
          name={el.name}
          description={el.description}
        />
      ))}
    </div>
  );
};

export default CardList;
