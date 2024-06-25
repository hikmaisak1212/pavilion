import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOneAll = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>SERVICES</h4>
                <h2 className='title'>Unmatched Expertise, Tailored Solutions</h2>
                <p>
                Our expert team ensures top-tier service and industry-leading knowledge. Committed to quality and innovation, we drive success and foster sustainable growth for your Business.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/s1.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-4.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>FUEL DISTRIBUTION AND SUPPLY SERVICES</h5>
                  <p>
                  We serve as a dependable supplier of petroleum products, encompassing Gasoline, Gasoil, Jet Fuel-A1, Bitumen, Lubricants and more, along with shipment services. 
                         </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/s2.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>COMPREHENSIVE TRADING SOLUTIONS</h5>
                  <p>
                  We are deeply involved in general trading, providing a wide range of products meticulously tailored to meet diverse business needs across multiple sectors.
                       </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/s3.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>PARA-PHARMACEUTICAL PRODUCTS WHOLESALE</h5>
                  <p>
                    We serves as a trusted wholesale distributor of Para-Pharmaceutical Products, offering a diverse range of high-quality healthcare solutions to its clientele.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/s4.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>ONSHORE - OFFSHORE OIL & GAS FIELDS</h5>
                  <p>
                  Our company offers specialized services for onshore and offshore oil and gas fields, providing 
                  essential support to the energy sector.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/s5.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-5.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>BROKERAGE AND TRADING SERVICES</h5>
                  <p>
                  We operate as a reliable services broker, using our expertise 
                        and industry connections to bridge gaps between clients and customized
                         solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/6.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-6.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>LAND TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOneAll;
