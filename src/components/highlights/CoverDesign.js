import React from 'react';
import MyButtonPDF from '../utils/MyButtonPDF';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


const CoverDesign = ()  => {
  return (
    <Slide left>
    <div className="center_wrapper">
      <div className="highlight_wrapper">
      <h2>Cover Design Contest</h2>
      <div className="highlight_description">
     <p> Students have the opportunity to draw and color the cover for 
this year’s spring recital programs The Four Seasons
One winning design will be chosen for the show program by someone who is not a teacher, parent or 
student at Révérence 
Studios. 

The winning cover will be printed as the 
programs’ cover!

Three runners up will be chosen to receive prizes (one in each age group: 3-7 years, 8-11 years, 12+ years). </p>

    <MyButtonPDF 
        text="Download Cover Design Contest Entry"
        bck="#a7223a"
        color="#fff"
        link="../../resources/pdfs/CoverDesign.pdf"
        download="newfilename"
    />
<div className="discount_description">
    <h3>Deadline for entry is March 4, 2019</h3>
    </div>


      </div>

      </div>
      </div>
    
  </Slide>
  )
}

export default CoverDesign
