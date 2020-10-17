import React from 'react';
import './ServiceDetails.css'
const ServiceDetails = ({ service }) => {
    return (
        <div className='col-md-4 my-5 py-5'>
            <div className="card cardStyle h-100 text-center" style={{width: "22rem"}}>
                <img src={service.img} className="card-img-top w-25 mx-auto mt-5" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
            </div>
        </div>
    );
};

export default ServiceDetails;