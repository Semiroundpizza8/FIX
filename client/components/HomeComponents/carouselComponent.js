import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

const carouselImageCreator = (url, header, text, altURL) => {
  const carouselImageStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    resize: 'both',
    width: '100vw',
    height: '60vh',
    overflow: 'hidden'
  }
  const specialCarouselImageStyle = {
    backgroundImage: `url(${altURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    resize: 'both',
    width: '100vw',
    height: '60vh',
    overflow: 'hidden'
  }
  return altURL ? (
    (
      <Carousel.Item >
        <MediaQuery query='(max-width: 600px)'>
          <div style={specialCarouselImageStyle} />
        </MediaQuery>
        <MediaQuery query='(min-width: 600px)'>
          <div style={carouselImageStyle} />
        </MediaQuery>
        <Carousel.Caption>
          <h3>{header}</h3>
          <p>{text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  ) : (
      <Carousel.Item >
        <div style={carouselImageStyle} />
        <Carousel.Caption>
          <h3>{header}</h3>
          <p>{text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
};

export const CarouselComponent = () => (
  <Carousel>
    {carouselImageCreator('./assets/pictures/DSC_0426_long.jpg', 'Injury & Illness Prevention', '')}
    {carouselImageCreator('./assets/pictures/DSC_0565_long.jpg', 'Ergonomics', '', './assets/pictures/PatientsRot.jpg')}
    {carouselImageCreator('./assets/pictures/DSC_0480_long.jpg', 'Wellness Services', '',  './assets/pictures/mobOffice.jpg')}
  </Carousel>
)

export default connect(null, null)(CarouselComponent);
