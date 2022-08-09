import './image-preview.styles.scss';

const ImagePreview = ({ imagePack, content }) => {
  return (
    <div className='image-header'>
      <img alt='graphite' src={imagePack} />
      <div className='blank-black' />
      <div className='h-1'>
        {content}
        <div className='stick'></div>
      </div>
    </div>
  );
};

export default ImagePreview;
