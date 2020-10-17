import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo-min.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

const ServiceList = () => {
    const [user] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    
    useEffect(() =>{
        fetch(`https://lit-brushlands-28713.herokuapp.com?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, []) 
    return (
        <div className='row' style={{ height: '100vh', backgroundColor: '#f4f7fc' }}>
            <div className="col-md-2 pt-5 pl-4" style={{ backgroundColor: '#fff' }}>
                <img src={logo} style={{ width: '150px' }} alt="" />
                <ul className='list-unstyled my-5 py-3'>
                    <li><ShoppingCartOutlinedIcon/>service</li>
                    <li><ListAltOutlinedIcon/>Service list</li>
                    <li><TextsmsOutlinedIcon/>Review</li>
                </ul>
            </div>
            <div className='col-md-10'>
                <div className='d-block' style={{ height: '80px', backgroundColor: '#fff' }}>
                    <h3 className='float-left p-4'>service</h3>
                    <h3 className='float-right p-4'>{user.name}</h3>
                </div>

                
            </div>
        </div>
    );
};

export default ServiceList;