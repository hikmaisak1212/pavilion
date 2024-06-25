import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const VideoAreaOne = () => {
  return (
    <>
      {/*video-area start*/}
      <div
        className='video-area pd-top-120 pd-bottom-120'
        style={{ background: "#080C24" }}
      >
        <div className='video-thumb-wrap '>
          <img src='assets/img/video/1.png' alt='Transpro' />
          
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-7'>
              <div
                className='cta-inner-wrap'
                style={{ background: "url(assets/img/video/bg.png)" }}
              >
                <div className='section-title style-white mb-0'>
                  <h2 className='title'>
                    NEED ANY HELP? GET CONSULTATION
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <Link to='tel:+971567909437'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  </Link>
                  <div className='details'>
                    {/* <h6>Have Any Question</h6> */}
                    <h3>+971 56 790 9437</h3>
                  </div>
                </div>
                <Link className='btn btn-white' to='/contact'>
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAreaOne;
