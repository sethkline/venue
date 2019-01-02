import React from 'react';
import MyButton from '../utils/MyButton';
import Fade from 'react-reveal/Fade';


const Description = ()  => {
  return (
    <Fade>
      <div className="center_wrapper">
        <div className="highlight_wrapper">
        <h2>Recital Performance Agreement</h2>
        <div className="highlight_description">
        <h3>Please electronically sign the Recital Performance Agreement by January 11, 2019. </h3>
       <p>  
        If we do not receive a performance agreement from you with a notation on how you will pay for the costume, 
        we will not order a costume for your child. </p>

      <MyButton 
          text="Sign Agreement"
          bck="#4d207a"
          color="#fff"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdI0-9a4KlYzrY1IJIeRzHPfHR3fEkZUA7PCezYetXnV1HLbg/viewform"
      />


        </div>

        </div>
        </div>
      
    </Fade>
  )
}

export default Description


