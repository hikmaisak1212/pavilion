import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area pd-bottom-120' >
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-2'
                    src='./assets/img/about/1.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-3'
                    src='./assets/img/about/6.png'
                    alt='Transpro'
                  />

                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title' style={{color:'white'}}>
                      WELCOME WORLD WIDE BEST TRANSPORT COMPANY
                    </h2>
                    <p className='content left-line' style={{color:'white'}}>
                      Competently implement efficient e-commerce without
                      cross-unit growth strategies.
                    </p>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li style={{color:'white'}}>
                          <IoArrowForwardOutline  style={{color:'#75c8d8'}}/>{" "}
                            Unlimited Revisions
                          </li>
                          <li style={{color:'white'}}>
                          <IoArrowForwardOutline style={{color:'#75c8d8'}} />
                            Best Fitness Excercise
                          </li>
                          <li style={{color:'white'}}>
                          <IoArrowForwardOutline style={{color:'#75c8d8'}}/>
                            Combine Fitness and
                          </li>
                          <li style={{color:'white'}}>
                          <IoArrowForwardOutline style={{color:'#75c8d8'}} />
                            Best Solutions
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                        <div className='thumb'>
                          <img src='./assets/img/about/7.png' alt='Transpro' />
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                      <Link className='btn btn-base' to='/about'>
                        MORE ABOUT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutOne;
