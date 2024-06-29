import useTitleAnimation from '../../../hooks/useTitleAnimation';
import RightArrow from '../../../svg/right-arrow';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

const  service_data = [
    {
        id: 1,
        icon: "assets/img/service/sv-icon-2.png",
        img:"assets/img/service/sv-icon-2.png",
        
        title: "Services Brokerage",
        description: <> We serve as a dependable services broker, leveraging its expertise and industry
         connections to connect clients with bespoke solutions tailored to their specific business needs.</>,
        delay: ".4s",
    },
    {
        id: 2,
        icon: "assets/img/service/sv-icon-1.png",
        img: "assets/img/service/sv-icon-1.png",
        title: "General Trading",
        description: <>In Pavilion investment we are Actively engages in general trading, offering a comprehensive array of products tailored to the diverse needs of businesses across various sectors.</>,
        delay: ".6s",
    },
    {
        id: 3,
        icon: "assets/img/service/sv-icon-3.png",
        img: "assets/img/service/sv-icon-3.png",
        title: "Fuel Supply",
        description: <>We serve as a dependable supplier of petroleum products, encompassing
         Gasoline, Gasoil, Jet Fuel A1, Bitumen, Lubricants, and more, along with efficient shipment services.</>,
        delay: ".7s",
    },
    {
        id: 4,
        icon: "assets/img/service/sv-icon-4.png",
        img: "assets/img/service/sv-icon-4.png",
        title: "Facilities Services",
        description: <>Our company provides specialized services catering to onshore and offshore oil and gas fields, extending crucial support to the energy sector.</>,
        delay: ".8s",
    },
    {
        id: 5,
        icon: "assets/img/service/sv-icon-2.png",
        img:"assets/img/service/sv-icon-2.png",
        title: "Para-Pharmaceutical Wholesale",
        description: <>We serve as a trusted wholesale distributor of Para-Pharmaceutical Products, offering high-quality healthcare solutions to its clientele.</>,
        delay: ".9s",
    },
    {
        id: 6,
        icon: "assets/img/service/sv-icon-5.png",
        img: "assets/img/service/sv-icon-5.png",
        title: "Assets & projects management",
        description: <>We provides this kind of services through annual contract covers the commercial, technical and operational concern in the buildings& assets،</>,
        delay: ".9s",
    },

    
    
]
const service_content = {
    title: "Explore Our Services",
    sub_title: <>Transforming Excellence into Opportunity</>,

    title_2: <>Data Analysis <br /> Tools & Methods</>,
    des: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
    btn_text: "Work with Us",

    

}
const {title, sub_title}  = service_content





const ServicesArea = () => {
    let titleRef = useRef(null)

   useTitleAnimation(titleRef)
    return (
        <>
            <div className="tp-service__area p-relative fix" style={{marginTop:'90px'}}>
               <div className="tp-service__grey-shape grey-bg"></div>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div ref={titleRef} className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                           <h2 className="tp-section-title">{title}</h2>
                           <p>{sub_title}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                    {service_data.slice(0,6).map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay} style={{marginBottom:'50px'}}>
                            <div className="tp-service__item mb-30" style={{boxShadow:'2px 1px #080c24'}}>
                                <div className="tp-service__icon">
                                    <img src={item.img} alt="theme-pure" />
                                </div>
                                <div className="tp-service__content">
                                    <h3 className="tp-service__title-sm tp-yellow-color"><Link to="service">{item.title}</Link></h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="tp-service__link">
                                    <Link to="service">
                                        <RightArrow /> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}


                  </div>
               </div>
            </div>
        </>
    );
};

export default ServicesArea;