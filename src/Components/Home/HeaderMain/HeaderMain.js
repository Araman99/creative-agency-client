import React from 'react';
import frame from '../../../images/logos/Frame-min.png'

const HeaderMain = () => {
    return (
        <main className='row my-5'>
            <div className="col-md-5 my-5">
                <h1>Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
                <p>Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Repellat omnis repudiandae quidem magni saepe quaerat?</p>
                <button className="btn btn-style">Hire us</button>
            </div>
            <div className="col-md-7">
                <img src={frame} className='w-75' alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;