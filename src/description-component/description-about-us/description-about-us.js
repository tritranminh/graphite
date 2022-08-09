import { Link } from 'react-router-dom';

import './description-about-us.styles.scss';

const DescriptionAboutUs = () => {
  return (
    <section className='preview-about container'>
      <div className='content-box__1'>
        <div className='text-content'>
          <Link to='/about-us'>
            <div className='name-tag '>About VietNam Graphite</div>
          </Link>
          <hr
            style={{ width: '20rem', height: '0.5rem', background: 'black' }}
          />
        </div>
        <div className='text-content'>
          <div className='text-element'>
            Founded in 2002, VietNam Graphite is a leading technology-oriented
            enterprise in integrating mining, production,
          </div>
          <div className='text-element'>
            packaging, trade, deep processing etc. and is characterized by
            energy saving and environmental protection.
          </div>
          <div className='text-element'>
            We own the largest and most important graphite company in Vietnam
          </div>
        </div>
      </div>

      <div className='content-box__2'>
        <Link to='/about-us' className='content-box'>
          <div className='content-img'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='content-text'>PROFILE</div>
        </Link>

        <Link to='/about-us' className='content-box'>
          <div className='content-img'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='content-text'>PURPOSE</div>
        </Link>

        <Link to='/about-us' className='content-box'>
          <div className='content-img'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
            </svg>
          </div>

          <div className='content-text'>HONORS</div>
        </Link>

        <Link to='/about-us' className='content-box'>
          <div className='content-img'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='content-text'>ATTENTION</div>
        </Link>

        <Link to='/about-us' className='content-box'>
          <div className='content-img'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
            </svg>
          </div>

          <div className='content-text'>PARTNER</div>
        </Link>
      </div>
    </section>
  );
};

export default DescriptionAboutUs;
