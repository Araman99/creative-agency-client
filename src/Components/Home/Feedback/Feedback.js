import React from 'react';
import patrik from '../../../images/customer-1.png';
import barron from '../../../images/customer-2.png';
import malone from '../../../images/customer-3.png';

const Feedback = () => {
    const userFeedback = [
        {
            img: patrik,
            name: "Nash Patrik",
            designation: "CEO, Manpol"
        },
        {
            img: barron,
            name: "Miriam Barron",
            designation: "CEO, Manpol"
        },
        {
            img: malone,
            name: "Bria Malone",
            designation: "CEO, Manpol"
        }
    ]
    return (
        <div style={{height: '100vh'}}>
            <h2 className='text-center my-5 py-5' style={{ color: '#111430' }}>Clients <span style={{ color: '#7ab259' }}>Feedback</span></h2>
            <div className='row d-flex justify-content-center py-5'>
                {
                    userFeedback.map((u,i) => {
                        return (
                            <div className='col-md-3'key={i}>
                                <div className="card text-center">
                                    <div className='d-flex ml-3'>
                                        <img src={u.img} className="card-img-top img-fluid mt-4" style={{width: '60px', height: '60px'}} alt="..." />
                                        <div className="card-body text-left">
                                            <h5 className="card-title">{u.name}</h5>
                                            <p className="card-text">{u.designation}</p>
                                        </div>
                                    </div>
                                    <p className='text-secondary'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptates error eaque culpa? Aspernatur, quas totam!
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Feedback;