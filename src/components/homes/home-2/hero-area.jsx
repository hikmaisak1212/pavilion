import { Link } from "react-router-dom";
import React from "react";
import ArrowLine from '../../../svg/arrow-line';
import RoundLine from '../../../svg/round-line';
import useCharAnimation from '../../../hooks/useCharAnimation';



// hero_content
const hero_content = {
  bg_img: "/assets/img/hero/hero-bg-2.png",
  scroll_btn: "Scroll Down",
  title: <><i><i className="child-1">Energy for </i> </i>{" "}
  <i><i className="child-1" style={{color:'#75C8D8'}}>Today</i> </i>{" "}
  <i><i className="child-1">Innovation For</i> </i>{" "}
  <i><i className="child-1" style={{marginRight:'900px',color:'#75C8D8'}}> tomorrow.</i></i>
  </>,
  btn_text: "See more",
  sub_title: <>Over<span>5Ok+ Client</span> all over the world</>,
  
}
const {
  bg_img, 
  scroll_btn,
  title,
  btn_text,
  sub_title, 
} = hero_content;


const HeroArea = () => {
  useCharAnimation('.tp-hero-2__title i.child-1');
  return (
    <>
      <div
        className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
        style={{ backgroundColor: `#080c24` }}
      >

        <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
      
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0 align-items-end" style={{paddingTop:'20px'}}>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__title-box">

                <h3 className="tp-hero-2__title tp-char-animation">
                  {title}
                </h3>

              </div>
              <div className="tp-hero-2__btn">
                <Link
                  className="tp-btn-green wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  to="/about"
                >
                  {btn_text}
                </Link>
              </div>

            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__right text-end p-relative">
                <div
                  className="tp-hero-2__main-img wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s" >
                  <img src={"assets/img/hero/9.png"} alt="theme-pure" />
                </div>

                {/* <div
                  className="tp-hero-2__sub-img-1 d-none d-sm-block"
                  data-parallax='{"x": 100, "smoothness": 30}' >
                  <img src={"assets/img/hero/image_02.png"} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-2 d-none d-sm-block"
                  data-parallax='{"x": -100, "smoothness": 10}' >
                  <img src={"assets/img/hero/hero-img-2-3.png"} alt="theme-pure" />
                </div> */}
{/* 
                <div
                  className="tp-hero-2__sub-img-3 d-none d-sm-block"
                  data-parallax='{"y": -80, "smoothness": 30}' >
                  <img src={"assets/img/hero/hero-img-2-4.png"} alt="theme-pure" />
                </div>

                <div className="tp-hero-2__sub-img-4">
                  <img src={"assets/img/hero/hero-shape-2-2.png"} alt="theme-pure" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;