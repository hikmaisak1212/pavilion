import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialOne = () => {
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
    initialSlide: 1,
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
      {/* testimonial area start */}
      <div className='testimonial-area pd-top-115 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='subtitle'>TESTIMONIALS</h4>
                <h2 className='title'>OUR CLIENT’S FEEDBACK</h2>
                <p className='content'>
                Hear What Our Clients Have to Say About Their Experience with Us
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Working with you has been a game-changer for our business. Their team’s expertise in light, middle, and heavy distillates is unparalleled.
                     We’ve seen a significant improvement in our operations and client satisfaction. Highly recommend!”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      {/* <img src='assets/img/testimonial/1.png' alt='Transpro' /> */}
                    </div>
                    <div className='details'>
                      <h5>Ahmed S.</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “consistently delivers top-quality products and exceptional service. Their commitment to excellence and innovation has
                     made them our go-to partner for all our trading needs. Their team is professional, reliable, and a pleasure to work with”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      {/* <img src='assets/img/testimonial/2.png' alt='Transpro' /> */}
                    </div>
                    <div className='details'>
                      <h5>Fatima A.</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “We’ve been collaborating with Pavilion for several occasions, and their dedication to client satisfaction is evident in 
                    every interaction. They offer comprehensive solutions and are always ready to go the extra mile. Truly a leader in the industry.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      {/* <img src='assets/img/testimonial/3.png' alt='Transpro' /> */}
                    </div>
                    <div className='details'>
                      <h5>Omar H.</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Pavilion stands out for their quality and reliability. They have a deep understanding of the market and always provide superior products. Their professionalism and customer-focused approach have made a significant impact on our business success.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      {/* <img src='assets/img/testimonial/2.png' alt='Transpro' /> */}
                    </div>
                    <div className='details'>
                      <h5>Mohammed R.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialOne;
