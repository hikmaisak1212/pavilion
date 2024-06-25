import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BannerOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-1'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
          <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/1.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title' >
                        FUEL DISTRIBUTION AND SUPPLY SERVICES
                        </h1>
                        <p className='b-animate-3 content' style={{fontSize:"18px"}}>
                        We serve as a dependable supplier of petroleum products, encompassing Gasoline, Gasoil, Jet Fuel A1, Bitumen, 
                        Lubricants, and more, along with efficient shipment services. 
                        The company prioritizes the delivery of top-notch fuels to fulfill the energy requirements of its clientele.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title' >
                        COMPREHENSIVE TRADING SOLUTIONS 
                        </h1>
                        <p className='b-animate-3 content' style={{fontSize:"18px"}}>
                        We are deeply involved in general trading, providing a wide range of products meticulously tailored to meet diverse business needs across multiple sectors. Our extensive selection ensures we cater uniquely to each industry, offering solutions that support and enhance operations.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                            //style={{backgroundColor:'transparent'}}
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                            //style={{backgroundColor:'transparent',color:'white'}}
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/5.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title' >
                        BROKERAGE AND TRADING SERVICES
                        </h1>
                        <p className='b-animate-3 content' style={{fontSize:"18px"}}>
                        We operate as a reliable services broker, using our expertise 
                        and industry connections to bridge gaps between clients and customized
                         solutions. Our goal is thorough understanding of client needs, leveraging
                          our knowledge and network to deliver tailored services meeting specific business requirements .
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                            //style={{backgroundColor:'transparent'}}
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                            //style={{backgroundColor:'transparent',color:'white'}}
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/4.jpg")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title' >
                        ONSHORE - OFFSHORE OIL & GAS FIELDS
                        </h1>
                        <p className='b-animate-3 content' style={{fontSize:"18px"}}>
                        Our company offers specialized services for onshore and offshore oil and gas fields, providing essential support to the energy sector. We are dedicated to addressing industry challenges, ensuring clients receive comprehensive solutions for operations in diverse environments.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                            //style={{backgroundColor:'transparent'}}
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                            //style={{backgroundColor:'transparent',color:'white'}}
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/3.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title' >
                        PHARMACEUTICAL PRODUCTS WHOLESALE
                        </h1>
                        <p className='b-animate-3 content' style={{fontSize:"18px"}}>
                        We serve as a trusted wholesale distributor of para-pharmaceutical products, offering a diverse range of high-quality healthcare solutions. Our commitment to excellence ensures delivery of superior products meeting varied needs of the healthcare industry, fostering trust in every transaction.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                            //style={{backgroundColor:'transparent'}}
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                            //style={{backgroundColor:'transparent',color:'white'}}
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
