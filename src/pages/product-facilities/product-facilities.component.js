import ImagePreview from '../../components/image-preview/image-preview.component';

import imageProductFacilities from './../../assets/img/1540194339.jpg';
import './product-facilities.styles.scss';

const ProductFacilities = () => {
  return (
    <div className='product-facilities'>
      <ImagePreview
        content='Product Facilities'
        imagePack={imageProductFacilities}
      />

      <div className='product-facilities__main container'>
        <div className='factory product-facilities__content'>
          <h1>Factory</h1>
          <div className='factory-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Flotation capacity</strong>: 50.000 (ton Per year)
            </div>
          </div>
          <div className='factory-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Ore reserves</strong>: 4.000.000 (ton)
            </div>
          </div>
          <div className='factory-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Fixed carbon content</strong>: 96% - 98%
            </div>
          </div>
          <div className='factory-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>The highest fixed carbon content </strong>: 99.95%
            </div>
          </div>
        </div>

        <div className='research product-facilities__content'>
          <h1>Research</h1>
          <div className='research-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M13 7H7v6h6V7z' />
                <path
                  fillRule='evenodd'
                  d='M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Electronic parts </strong>
            </div>
          </div>

          <div className='research-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Coating Processed Products</strong>
            </div>
          </div>

          <div className='research-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Battery</strong>
            </div>
          </div>

          <div className='research-content'>
            <div className='icon-content'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z' />
              </svg>
            </div>
            <div className='detail-content'>
              <strong>Lubricants</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFacilities;
