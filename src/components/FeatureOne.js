import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area ' style={{backgroundColor:'white',boxShadow:' 2px 2px 2px 2px #080c24'}}>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>FEATURES</h4>
                <h2 className='title' style={{color:'black'}}>WHO WE ARE</h2>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line' style={{color:'black'}}>
                Pavilion Investment stands as a prominent corporate entity headquartered
                 in the United Arab Emirates, committed to upholding excellence across multiple sectors.
                 Founded on principles of quality, dependability, and client contentment
                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                  <img src='assets/img/icon/feature-3.png' alt='pavilion' />
                  </div>
                  <h5>OUR VISION</h5>
                  <p>
                  We aspire to become a frontrunner in the local market, delivering top-tier
                   products and services, all while cultivating sustainable and mutually beneficial collaborations.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap  bg-sky'>
                  <div className='icon'>
                  <img src='assets/img/icon/feature-3.png' alt='pavilion' />
                  </div>
                  <h5>OUR PHILOSOPHY</h5>
                  <p>
                  We nurture enduring partnerships, innovate solutions, and actively
                  contribute to the advancement and welfare of our associates and the communities we engage with.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-3.png' alt='pavilion' />
                  </div>
                  <h5>OUR MISSION</h5>
                  <p>
                  We are committed to furnishing superior offerings across diverse sectors, ensuring utmost client satisfaction,
                   and operational excellence, and bolstering the economic prosperity of the region.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                  <img src='assets/img/icon/feature-3.png' alt='pavilion' />
                  </div>
                  <h5>OUR RELATIONSHIPS</h5>
                  <p>
                  Our achievements are deeply rooted in the solid relationships we have nurtured within UAE. We value these alliances highly and
                   are dedicated to  mutual prosperity.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
