import React from 'react';
import { connect } from 'react-redux';
import { CarouselComponent, MainInfo, PictureInfo, Contact } from './';

const textFlexContainer = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2em',
};

const offwhiteTextboxContainers = {
  ...textFlexContainer,
  backgroundColor: '#dddddd',
  color: 'black',
  height: 'auto',
  width: '100vw',
  display: 'flex'
};

export const LandingPage = () => {
  return (
    <div>
      <CarouselComponent />
      <MainInfo />
      <PictureInfo />
      {/* Testimonial */}
      {/* <div style={offwhiteTextboxContainers} >
        <h1>Testimonials</h1>
        <p style={{ width: '33vw' }}>“We have been working with Dr. O and his staff for two years.  Our field workers have really appreciated the opportunity to receive treatment for their aches and pains right on the jobsite.  Each year our safety statistics have improved, and in 2017 we recorded zero lost work days!”</p>
        <p><i> - Steven Brazel, John Burns Construction Company Safety Director</i></p>
      </div > */}



      {/* Contact */}
      <Contact />
    </div>
  )
}

export default connect(null, null)(LandingPage);
