import LinearGradientLine from '../../../svg/linear-gradient-line';
import { Link } from 'react-router-dom';
import React from 'react';

const service_content = {
    title: <>We provide the <br /> best service for you</>,
    des: <></>,

    users_data: [
        {
            id: 1, 
            users_count: <>3.5<i>m</i></>,
            users_status: <>Active Users</>,

        },
        {
            id: 2, 
            users_count: <>240<i>+</i></>,
            users_status: <>Trusted Companies</>,

        },
        {
            id: 3, 
            users_count: <>78<i>k</i></>,
            users_status: <>Customer care</>,

        },
    ],
    service_data: [
        {
            id: 1,
            color: "2",
            title: "Online",
            img: "assets/img/service/sv1.png",
        },
        {
            id: 2,
            color: "2",
            title: "Bank Transfers",
            img: "assets/img/service/sv2.png",
        },
        {
            id: 3,
            color: "2",
            title: "Keyed",
            img:  "assets/img/service/sv3.png",
        },
        {
            id: 4,
            color: "2",
            title: "In-Person",
            img:  "assets/img/service/sv4.png",
        }, 
    ],

    free_tools_title: "More free tools than you can handle",
    free_tools: [
        <>Invoicing</>,
        <>Online Checkout</>,
        <>Point-of-Sale</>,
        <>Online Food Ordering</>,
        <>ICard Vault</>,
        <>Customer Portal</>,
        <>Inventory</>,
        <>Virtual Terminal</>,
        <>Recurring Plans</>,
        <>Payment Links</>,
        <>SMS Payments</>,
        <>QR Codes</>,
    ]

}
const {title, des, users_data, service_data , free_tools_title, free_tools}  = service_content 

const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-2__area p-relative pb-160">
               {/* <div className="tp-service-2__shape">
                  <img src={ "assets/img/service/sv-bg-2-1.jpg" } alt="theme-pure" />
               </div> */}
               <div className="container z-index-5">
                  {/* <div className="row align-items-center mb-50">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-service-2__section-box">
                           <h3 className="tp-section-title-lg pb-20">{title}</h3>
                           <LinearGradientLine />
                           <p>{des}</p>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                           <div className="tp-service-2__user-shape"> 
                            
                           </div>
                           
                        </div>
                     </div>
                  </div>
                  <div className="row gx-60">

                    {service_data.map((item, i)  => 
                        <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" 
                        data-wow-duration=".9s" data-wow-delay=".8s">
                        <div className="tp-service-2__item-wrapper p-relative">
                           <div className="tp-service-2__item d-flex justify-content-between flex-column">
                              <div className="tp-service-2__icon">
                                 <img src={item.img} alt="theme-pure" style={{color:'white'}} />
                              </div>
                              <div className="tp-service-2__text">
                                 <h4 className="tp-service-2__title-sm"><Link to="/service">{item.title}</Link></h4>
                                 <Link className="tp-service-2__link" to="/service">Explore
                                    <i className="far fa-arrow-right"></i>
                                 </Link>
                              </div>
                           </div>
                           <div className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}></div>
                        </div>
                     </div>
                        
                        )
                    } 

                  </div> */}

                  <div className="row justify-content-center">
                     <div className="col-xl-10 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <div className="tp-service-2__bottom-wrapper p-relative mt-110">
                           <div className="tp-service-2__feature-item">
                              <h4 className="tp-service-2__feature-title">{free_tools_title}</h4>
                              <div className="tp-service-2__feature-box d-flex justify-content-between">
                                 <div className="tp-service-2__feature-list">
                                    <ul>
                                        {free_tools.map((list, i)  => <li key={i}>{list}</li> )}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
        </>
    );
};

export default ServiceArea;