import React from 'react'
import {Carousel} from 'react-bootstrap';
import './slider.css';
const Slider = () => {
    return (
        <div className="container">
        <Carousel className="slider">
        <Carousel.Item interval={1000}>
          <img
            className="w-100 img1"
            src="https://images.unsplash.com/photo-1601242453944-421cde7cfc84?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGliaXNjdXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="अड़हुल"

          />
          <Carousel.Caption>
            <h3>अड़हुल</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img2"
            src="https://images.unsplash.com/photo-1600135931561-280cb1ea2f2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaWdvbGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="गेंदा"
          />
          <Carousel.Caption>
            <h3>गेंदा</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img3"
            src="https://new-img.patrika.com/upload/2019/01/28/aprtajita1_4046518_835x547-m.jpg"
            alt="अपराजिता"
          />
          <Carousel.Caption>
            <h3>अपराजिता</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img2"
          src="https://diy.sndimg.com/content/dam/images/diy/fullset/2017/6/28/0/CI_Ball-Horticultural-Co_Marigold-flower.jpg.rend.hgtvcom.1280.960.suffix/1498658164122.jpeg"
          alt="गेंदा"
        />
        <Carousel.Caption>
          <h3>गेंदा</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 img3"
            src="https://images-na.ssl-images-amazon.com/images/I/416ggzIgXSL.jpg"
            alt="गुलमेंहदी"
          />
          <Carousel.Caption>
            <h3>गुलमेंहदी</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img2"
          src="https://florgeous.com/wp-content/uploads/2020/09/dark-red-marigold.jpg"
          alt="गेंदा"
        />
        <Carousel.Caption>
          <h3>गेंदा</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img2"
          src="https://i.ebayimg.com/images/g/s9AAAOSwL9paefQE/s-l1600.jpg"
          alt="पंपात्ता"
        />
        <Carousel.Caption>
          <h3>पंपात्ता</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 img2"
          src="https://media.webdunia.com/_media/hi/img/article/2016-05/03/full/1462260512-3088.jpg"
          alt="तुलसी"
        />
        <Carousel.Caption>
          <h3>तुलसी</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default Slider
