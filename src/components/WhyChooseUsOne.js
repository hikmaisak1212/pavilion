import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
const WhyChooseUsOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*wcu-area start*/}
      <div
        className='wcu-area bg-overlay'
        style={{ background: "url(assets/img/wcu/bg.png)" }}
      >
        {/* <img className='img-1' src='assets/img/wcu/1.png' alt='Transpro' />
        <img className='img-2' src='assets/img/wcu/2.png' alt='Transpro' /> */}
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-6 order-lg-2'>
              <div className='video-thumb-wrap'>
                <img src='assets/img/wcu/video.png' alt='Transpro' style={{borderRadius:'25px', marginTop:'66px'}} />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 order-lg-1'>
              <div className='section-title style-white mb-0'style={{marginRight:"20px"}}>
                <h4 className='subtitle style-2'></h4>
                <h2 className='title'>WHY CHOOSE US</h2>
                <p className='content'>
                we nurture enduring partnerships, innovate solutions, and actively contribute to 
                the advancement and welfare of our associates and the communities we engage with.
                </p>
              </div>
              <div className='single-wcu-wrap'>
                <div className='details'>
                  <h6>UNMATCHED EXPERTISE</h6>
                  <p>
                  Our team consists of seasoned professionals with extensive knowledge in light, middle, and heavy 
                  distillates, ensuring top-tier service
                   and exceptional results.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='details'>
                  <h6>COMMITMENT TO EXCELLENCE</h6>
                  <p>
                  We are dedicated to delivering superior products and services. Our unwavering commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='details'>
                  <h6>INNOVATIVE SOLUTIONS</h6>
                  <p>
                  We continuously strive to innovate and provide cutting-edge solutions tailored to our client's needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*wcu-area end*/}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default WhyChooseUsOne;
