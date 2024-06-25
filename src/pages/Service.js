import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BreadcrumbServices = React.lazy(() => import("../components/BreadcrumbServices"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const ServiceOneAll = React.lazy(() => import("../components/ServiceOneAll"));
const Service = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <BreadcrumbServices title={"SERVICES"} />

          {/* Service One All */}
          <ServiceOneAll />

          {/* Contact One */}
          {/* <div className='call-to-contact-area pd-top-140  mt-0'>
            <ContactOne />
          </div> */}

          {/* Partner One */}
          {/* <PartnerOne /> */}

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default Service;
