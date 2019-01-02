import React from 'react';
import Description from './Description';
import Discount from './Discount';
import Spreadsheet from './Spreadsheet';
import CoverDesign from './CoverDesign';

const Highlights = () => {
    return (
        <div className="highlight_wrapper">
        <Description/>
        <Spreadsheet/>
        <CoverDesign/>
        {/* <Discount /> */}
            
        </div>
    );
};

export default Highlights;