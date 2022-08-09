import ImagePreview from '../../components/image-preview/image-preview.component';
import imageAboutUs from './../../assets/img/1533790558.jpg';

import './about-us.styles.scss';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <ImagePreview content='About Us' imagePack={imageAboutUs} />

      <div className='about-us__main '>
        <div className='about-us__1 container'>
          <h1 className='about-us__header'>VietNam Graphite </h1>
          <p>
            Vietnam Graphite Group Company Limited (Vietnam Graphite Group -
            VGG, formerly known as Ngoc Vien Dong Trading Co., Ltd), business
            registration certificate number 0101234036 issued by Hanoi
            Department of Planning and Investment for the first time on April
            12. .2002. The new name has been used since April 2018 according to
            the business registration change certificate issued by the
            Department of Planning and Investment of Hanoi on 16.04.2018. VGG is
            located on the 15th floor, Viet A Building, Duy Tan Street, Cau
            Giay, Hanoi. VGG's Graphite mine is in Yen Thai commune, Van Yen
            district, Yen Bai province. VGG's Graphite Processing Factory is
            located in Bao Dap Commune, Tran Yen District, Yen Bai Province. The
            total investment of the whole project is about 700 billion VND; in
            which the mining and processing project with an investment of 451
            billion VND has been implemented since 2014 until now, the rest are
            other items such as: company acquisition/mine purchase,
            compensation/site clearance , performing obligations to the state...
            The value of VGG's mineral concentrates is valued at VND 1,560
            billion by the state as the basis for tax calculation when granting
            mining rights.
          </p>
          <img />
        </div>

        <div className='about-us__2'>
          <section className='container'>
            <div>
              <h1>Core Value</h1>
              <p>
                Focus on customers with quality products and services. Always
                put efficiency as the goal of every job. Learn, create to
                perfect. Cooperation and trust are the driving force of success.
              </p>
            </div>

            <div>
              <h1>Vision</h1>
              <p>
                We contribute to the development of Vietnam through the Graphite
                industry. Vietnamgraphite aims to develop into a sustainable
                development corporation in Vietnam.
              </p>
            </div>

            <div>
              <h1>Hornors</h1>
              <p>
                We contribute to the development of Vietnam through the Graphite
                industry. Vietnamgraphite aims to develop into a sustainable
                development corporation in Vietnam.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
