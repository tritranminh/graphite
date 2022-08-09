import ImagePreview from '../../components/image-preview/image-preview.component';
import contactImage from './../../assets/img/ng-header-contact.jpg';

import './contact.styles.scss';

const Contact = () => {
  return (
    <div className='contact-page'>
      <ImagePreview imagePack={contactImage} content='Contact' />
      <div className='contact-page__content container'>
        <div className='contact-page-left'>
          <div className='contact-item'>
            <p>VIETNAM GRAPHITE GROUP</p>
            <div>
              Address: Floor 15, Viet A Tower, Duy Tan, Cau Giay, Ha Noi, Viet
              Nam
            </div>
            <div>Tel: +(84) 972915978</div>
            <div>Email: snowN@graphitevietnam.com</div>
          </div>

          <div className='contact-item'>
            <p>THE DMC GROUP</p>
            <div>
              Address: The DMC Tower, 535 Kim Ma, Ba Dinh, Ha Noi, Viet Nam
            </div>
            <div>Tel: +(84) 972915978</div>
            <div>Email: snowN@graphitevietnam.com</div>
          </div>
        </div>

        <div className='contact-page-right'></div>
      </div>
    </div>
  );
};

export default Contact;
