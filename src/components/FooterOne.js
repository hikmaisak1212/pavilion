import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area'>
        <div
          className='footer-top'
          style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/map-marker.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>OFFICE ADDRESS:</h6>
                    <p>Hamdan St, Block A Bodium Building, Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT US:</h6>
                    <Link to='mailto:ceo@pavilioninv.ae'>
                    <p>ceo@pavilioninv.ae</p>
                    </Link>
                    <Link to='tel:+971567909437'>
                    <p>+971 56 790 9437</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>WORKING HOURS:</h6>
                    <p>Weekdays - Mon-Sta: 8am-21pm</p>
                    <p>Weekend - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo-white.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <p>
                  We stands as a prominent corporate entity headquartered in the United Arab Emirates, committed to upholding excellence across multiple sectors. 
                  </p>
                  {/* <ul className='social-media style-border'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>OUR SERVICES</h4>
                <ul>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Onshore and Offshore Oil and Gas Fields 
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Para-Pharmaceutical Wholesale
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Services Brokerage
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Fuel Supply Services
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> General Trading
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_subscribe'>
                <h4 className='widget-title'>SUBSCRIBE NOW</h4>
                <p>
                We aspire to become a frontrunner in the local market, delivering top-tier products and services, all while cultivating sustainable and mutually beneficial collaborations.
                </p>
                <div className='single-subscribe-inner'>
                <input type='text' placeholder='Email Address' style={{borderRadius:'12px', marginRight:'15px'}}/>
                  <a className='btn btn-base' href='#'>
                    <FaPaperPlane />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
