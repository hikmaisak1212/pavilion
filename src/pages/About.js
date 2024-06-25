import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import AboutArea from "../common/about-area"
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const BreadcrumbServices = React.lazy(() => import("../components/BreadcrumbServices"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const SkillOne = React.lazy(() => import("../components/SkillOne"));
const TestimonialOne = React.lazy(() => import("../components/TestimonialOne"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const VideoAreaTwo = React.lazy(() => import("../components/VideoAreaTwo"));
const LogisticsOne = React.lazy(() => import("../components/LogisticsOne"));

const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <BreadcrumbServices title={"ABOUT US"} />

          {/* About One */}
          <div className='pd-top-120 pd-bottom-120'>
            <AboutArea />
          </div>
          <div style={{backgroundColor:'#080c24'}}>
          <AboutOne />
          </div>
          {/* Counter One */}

        

         
          <LogisticsOne/>
          {/* <VideoAreaTwo/> */}
          {/* Video Area One */}
          <VideoAreaOne />


          {/* Testimonial Two */}
          <TestimonialOne />

          {/* Partner One */}
          {/* <PartnerOne /> */}
          <div className='fact-area' style={{ background: "#f9f9f9", marginBottom:'50px' }}>
            <CounterOne />
          </div>
          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
