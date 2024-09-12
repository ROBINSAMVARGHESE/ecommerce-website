import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../carousels/ExampleCarouselImage';
import './Home.css';
import Products from '../products/Products';

import Firstslide from '../Assets/Images/MAX-Uber-HD-Banner.png'
import SecondSlide from '../Assets/Images/MAX-Uber-HD-21AUG24.png'
import ThirdSlide from '../Assets/Images/MAX-Uber-Kids.png'
import FourthSlide from '../Assets/Images/Banner4-Women-20AUG24.png'




function Home() {
  return (
    <>
    <div className='hero'>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage src={Firstslide} alt="First slide" width="90%"  />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={SecondSlide} alt="Second slide" width="90%"  />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={ThirdSlide} alt="third slide" width="90%"  />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={FourthSlide} alt="fourth slide" width="90%" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Products/>
    </>
  );
}

export default Home;
