import React from 'react';
import './Works.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel_1 from '../../../images/carousel-1.png'
import carousel_2 from '../../../images/carousel-2.png'
import carousel_3 from '../../../images/carousel-3.png'
import carousel_4 from '../../../images/carousel-4.png'
import carousel_5 from '../../../images/carousel-5.png'
import { Card, Col } from 'react-bootstrap';
const Works = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: "button__bar",
        arrow: false
      };

      const works =[
          {
              img: carousel_1
          },
          {
            img: carousel_2
          },
          {
            img: carousel_3
          },
          {
            img: carousel_4
          },
          {
            img: carousel_5
          }
      ]
    return (
        <div className="works-container text-white pt-3">
            <h2 className='text-center my-4 py-5'>Here are some of <span style={{ color: '#7ab100' }}>our works</span></h2>
            <Slider {...settings}>
                {
                    works.map((w,i) => {return(
                        <Col className="ml-5 pl-5" key={i}>
                            <Card>
                                <Card.Img
                                variant="top"
                                src={w.img}
                                style={{height: "300px"}}
    
                                />
                            </Card>
                        </Col>
                    )})
                }
            </Slider>

        </div>
    );
};

export default Works;