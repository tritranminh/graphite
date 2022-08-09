import { Link } from 'react-router-dom';

import './description-graphite.styles.scss';

const DescriptionGraphite = () => {
  return (
    <section className='containter preview-graphite'>
      <div className='content-box__1'>
        <div className='text-content'>
          <Link to='/graphite'>
            <div className='name-tag '>Graphite</div>
          </Link>
          <hr />
        </div>
        <div className='content-box__3 container'>
          <Link to='/graphite'>
            <div className='img-1'>
              <div className='img-text__content'>
                <p>Excellent conductor of heat and electricity</p>
                <p>It is ideal for various aspects of steel making </p>
              </div>
            </div>
          </Link>

          <Link to='/graphite'>
            <div className='img-2'>
              <div className='img-text__content'>
                <p>High natural lubricity.</p>
                <p>An integral role in automobiles.</p>
              </div>
            </div>
          </Link>

          <Link to='/graphite'>
            <div className='img-3'>
              <div className='img-text__content'>
                <p>Ultra lightweight</p>
                <p>Long employed in aerospace and Formula One racing</p>
              </div>
            </div>
          </Link>

          <Link to='/graphite'>
            <div className='img-4'>
              <div className='img-text__content'>
                <p>The Material for a Green Economy</p>
                <p>lower environmental footprint and lower production costs</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className='blank-black'></div> */}
    </section>
  );
};

export default DescriptionGraphite;
