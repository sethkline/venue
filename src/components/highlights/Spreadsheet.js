import React from 'react';
import MyButtonPDF from '../utils/MyButtonPDF';
import Slide from 'react-reveal/Slide';


const Spreadsheet = ()  => {
  return (
    <Slide right>
      <div className="center_wrapper">
        <div className="highlight_wrapper">
        <h2>Recital Spreadsheet</h2>
        <div className="highlight_description">
       <p> Find out what recital your child is in with this spreadsheet. </p>

      <MyButtonPDF 
          text="Recital Spreadsheet"
          bck="#a7223a"
          color="#fff"
          link="../wp-content/uploads/2019/01/Spreadsheet2019.pdf"
          download="Recital Spreadsheet"
      />

        </div>

        </div>
        </div>
      
    </Slide>
  )
}

export default Spreadsheet
