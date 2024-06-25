import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { FaBoxOpen, FaLayerGroup } from "react-icons/fa";
import { MdOutlineRememberMe } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
const LogisticsOne = () => {
  return (
    <>
      {/* Start Logistics area  */}
      <div className='logistics_area'>
        <div className='container-fluid'>
          <div className='row justify-content-start'>
            <div className='col-lg-6 remove-col-padding'>
              <div className='logistics-image' />
            </div>
            <div className='col-lg-5'>
              <div className='logistics-content'>
                <div className='section-title  text-left'>
                  <h2 className='title' style={{marginBottom:'10px'}}>OUR VISION</h2>
                  <p>
                  We aspire to become a frontrunner in the local market, delivering top-tier products and services, all while cultivating sustainable and mutually beneficial collaborations. We are committed to furnishing superior offerings across diverse sectors, ensuring utmost client satisfaction, and operational excellence, and bolstering the economic prosperity of the region.
                  </p>
                </div>
              </div>
              <div className='counterup' id='counterup'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInLeft'>
                        <div className='couter-icon' style={{paddingLeft:'3px'}}>
                          <MdOutlineRememberMe />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={25} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Expert Members</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInUp'>
                        <div className='couter-icon'>
                          <FaProjectDiagram />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={160} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Project Delivered</h3>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4'>
                      <div className='countr wow fadeInRight'>
                        <div className='couter-icon'>
                          <GiStarsStack />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={20} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>Years Of Experience</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Logistics area  */}
    </>
  );
};

export default LogisticsOne;
