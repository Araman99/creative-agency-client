import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo-min.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import { Link } from 'react-router-dom';
const AddService = () => {
    const [user,setUser] = useContext(UserContext);
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const handleServiceSubmit = () => {
        const formData=new FormData()
        formData.append('file',file)
        formData.append('email',service.email)
        formData.append('title',service.title)
        formData.append('details',service.details)

        fetch('http://localhost:5000/addService',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    const handleBlur = (e) => {
        const newService ={...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    const handleFileChange =(e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div className='row' style={{ height: '100vh', backgroundColor: '#f4f7fc' }}>
            <div className="col-md-2 pt-5 pl-4" style={{ backgroundColor: '#fff' }}>
                <img src={logo} style={{ width: '150px' }} alt="" />
                <ul className='list-unstyled my-5 py-3'>
                    <Link to='/dashboard/addService'>
                        <li><ShoppingCartOutlinedIcon/>service</li>
                    </Link>
                    <Link to='/serviceList'>
                        <li><ListAltOutlinedIcon/>Service list</li>
                    </Link>
                    <Link to='/review'>
                         <li><TextsmsOutlinedIcon/>Review</li>
                    </Link>
                </ul>
            </div>
            <div className='col-md-10'>
                <div className='d-block' style={{ height: '80px', backgroundColor: '#fff' }}>
                    <h3 className='float-left p-4'>service</h3>
                    <h3 className='float-right p-4'>{user.name}</h3>
                </div>
                <Form style={{width: '500px'}} className='mt-5 p-3' onSubmit={handleServiceSubmit} >
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="name" onBlur={handleBlur} name='name' placeholder="Your name/company's name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" onBlur={handleBlur} name='email' placeholder="Your email address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicservice">
                        <Form.Control type="text" onBlur={handleBlur} name='title' placeholder="Graphic Design"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" onBlur={handleBlur} name='details' placeholder="Project Details"/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Price" />
                        </Col>
                        <Col>
                            <Form.File.Input onChange={handleFileChange} variant="outline-success" placeholder="Upload project" />
                        </Col>
                    </Row>
                    <br/>
                    <Button className='btn btn-style' type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddService;