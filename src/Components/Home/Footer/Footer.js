import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBD062' }}>
            <Container>
                <div className="row p-5">
                    <div className="col-md-6">
                        <h1>Let us handle your project, professionally.</h1>
                        <small>With wall written coders, we build amazing apps for all platforms mobile and web apps in general</small>
                    </div>
                    <div className="col-md-6">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your email address" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Your name / Company's name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="3" placeholder='Your message' />
                            </Form.Group>
                            <Button className='btn-style' type="submit">
                                Submit
                        </Button>
                        </Form>
                    </div>
                </div>
            </Container>
            <small className='d-block text-center py-5'>Copyright Orange labs {new Date().getFullYear()}</small>
        </div>
    );
};

export default Footer;