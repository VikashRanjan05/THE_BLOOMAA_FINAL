import React from 'react'
import {Carousel} from 'react-bootstrap';
import './slider.css';
const ServiceSlider = () => {
    return (
        <div className="container">
        <Carousel className="slider1">
        <Carousel.Item interval={1300}>
          <img
            className="w-100 img4"
            src="https://i.pinimg.com/originals/b6/3b/44/b63b440b42f7ce840ccb506525ef7c0a.jpg"
            alt="अड़हुल"

          />
          <Carousel.Caption>
            <h4>We collect flowers directly from farmers</h4>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1300}>
          <img
            className="d-block w-100 img4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx41XkNESkFEdXdzdmPl0TF2roT4H6mOATQ&usqp=CAU"
            alt="गेंदा"
          />
          <Carousel.Caption>
            <h3>Made perfect box</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1300}>
          <img
            className="d-block w-100 img4"
            src="https://i.pinimg.com/originals/8a/62/71/8a62718f74f215d6794817c644875429.png"
            alt="अपराजिता"
          />
          <Carousel.Caption>
            <h4 style={{color: 'gray'}}>Delivery on its way</h4>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1300}>
        <img
          className="d-block w-100 img4"
          src="https://banner2.cleanpng.com/20180221/kwe/kisspng-service-delivery-logistics-quality-service-delivered-to-the-door-5a8d4b76558481.7184431715192093343503.jpg"
          alt="गेंदा"
        />
        <Carousel.Caption>
          <h4>Regular delivery from 5am-7am</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
        
      </Carousel>
        </div>
    )
}

export default ServiceSlider
