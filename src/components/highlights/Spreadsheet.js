import React from 'react';
import MyButton from '../utils/MyButton';
import Slide from 'react-reveal/Slide';


const Spreadsheet = ()  => {
  return (
    <Slide right>
      <div className="center_wrapper">
        <div className="highlight_wrapper">
        <h2>Recital Spreadsheet</h2>
        <div className="highlight_description">
       <p> Find out what recital your child is in with this spreadsheet. </p>

      <MyButton 
          text="Recital Spreadsheet"
          bck="#a7223a"
          color="#fff"
          link="../../resources/pdfs/Spreadsheet2019.pdf"
      />

        </div>

        </div>
        </div>
      
    </Slide>
  )
}

export default Spreadsheet
