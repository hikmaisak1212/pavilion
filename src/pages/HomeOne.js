import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const BlogOne = React.lazy(() => import("../components/BlogOne"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const PortfolioOne = React.lazy(() => import("../components/PortfolioOne"));
const ServiceOne = React.lazy(() => import("../components/ServiceOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const TestimonialOne = React.lazy(() => import("../components/TestimonialOne"));
const WhyChooseUsOne = React.lazy(() => import("../components/WhyChooseUsOne"));
const HomeOne = () => {
  return (
    <>
    <div >
{/* //style={{backgroundColor:'#080c24'}} */}
   
      <Fragment>
        <Suspense fallback={<Preloader />}>

          {/* Navbar One */}
          <NavbarOne />

          {/* Banner One */}
          <BannerOne />

          {/* Feature One */}
          <div  style={{ background: "url(assets/img/service/bg.png)" }}>
          <FeatureOne />
          </div>

          {/* About One */}
          <div style={{backgroundColor:'#080c24'}}>
          <AboutOne />
          </div>

          {/* Service One */}
          <ServiceOne />

          {/* Why Choose Us One */}
          <WhyChooseUsOne />

          {/* Counter One */}

          <CounterOne />

          {/* Team One */}
          {/* <TeamOne /> */}

          {/* Contact One */}
          <div
            className='call-to-contact-area pd-top-240'
            style={{ background: "#F9F9F9" }}
          >
            <ContactOne />
          </div>

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
