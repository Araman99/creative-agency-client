 import React from 'react';
 import slack from '../../../images/logos/slack-min.png'
 import google from '../../../images/logos/google-min.png'
 import uber from '../../../images/logos/uber.png'
 import netflix from '../../../images/logos/netflix-min.png'
 import airbnb from '../../../images/logos/airbnb-min.png'
 import service1 from '../../../images/icons/service1.png'
 import service2 from '../../../images/icons/service2.png';
 import service3 from '../../../images/icons/service3.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

 const Services = () => {
     const serviceData =[
         {
             img: service1,
             name: "Web & Mobile design",
             description: "We craft stunning and amazing web UI a well drafted UX to fit your product."
         },
         {
            img: service2,
            name: "Graphic design",
            description: "Amazing figures social media posts brand representations that would make your brand stand out."
        },
        {
            img: service3,
            name: "Web development",
            description: "With well written codes we build amazing apps for all platforms mobile and web apps in general."
        }
     ]
     const widthSet = {
         width: '130px',
         height: '40px'
        }
     return (
         <div className='container pt-4'>
             <div className="row mt-5 pb-5 ml-5">
                 <div className="col-md-2">
                     <img src={slack} style={widthSet} alt=""/>
                 </div>
                 <div className="col-md-2">
                    <img src={google} style={widthSet} alt=""/>
                 </div>
                 <div className="col-md-2">
                    <img src={uber} style={widthSet} alt=""/>
                 </div>
                 <div className="col-md-2">
                    <img src={netflix} style={widthSet} alt=""/>
                 </div>
                 <div className="col-md-2">
                    <img src={airbnb} style={widthSet} alt=""/>
                 </div>
             </div>
             <h2 className='text-center mt-5 pt-5'>Provide awesome <span style={{color: '#7ab259'}}>services</span></h2>
             <div className="row">
             {
                 serviceData.map((service,i) => <ServiceDetails service={service} key={i} />)
             }
             </div>
         </div>
     );
 };
 
 export default Services;