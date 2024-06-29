import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import AboutArea from "../common/about-area"
import ServiceAreaHome1 from '../components/homes/home/services-area'
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const TestimonialOne = React.lazy(() => import("../components/TestimonialOne"));
const WhyChooseUsOne = React.lazy(() => import("../components/WhyChooseUsOne"));
const HomeOne = () => {
  return (
    <>
    <div >
   
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar One */}
          <NavbarOne />
          {/* Banner One */}
          <BannerOne />
          <AboutArea/>
           {/* About One */}
           <div style={{backgroundColor:'#080c24'}}>
          <AboutOne />
          </div>
          <ServiceAreaHome1/>
          <WhyChooseUsOne />
          {/* Testimonial One */}
          <TestimonialOne />
          {/* Footer One */}
          <FooterOne />
          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
      </div>
    </>
  );
};

export default HomeOne;
