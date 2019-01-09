import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {

        prices: [10, 40, 60],
        positions:['Typed Message', 'Half Page Ad', 'Full Page Ad'],
        desc: [ 
            'four sentences maximum',
            '5.5"x 4.25" (at least 300 dpi)',
            '5.5"x 8.5" (at least 300 dpi)'

        ],
        linkto:[
            './recital-ad/',
            './recital-ad/',
            './recital-ad/',],
        delay: [500, 0, 500]
    }

   showBoxes = () => (
       this.state.prices.map((box, i) => (
           <Zoom
            delay={this.state.delay[i]}
            key={i}
           >
               <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                <span>${this.state.prices[i]}</span>
                <span>{this.state.positions[i]}</span>

                </div>
                <div className="pricing_description">
                <span>{this.state.desc[i]}</span>
                </div>
                <div className="pricing_buttons">
                <MyButton 
                    text="Purchase"
                    bck="#a7223a"
                    color="#fff"
                    link={this.state.linkto[i]}
                /></div>
                </div>
           </div>
           </Zoom>
           
       ) )
   )


    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Recital Program Ads</h2>

                <div className="pricing_wrapper">
                {this.showBoxes()}
                </div>
            </div>
                
            </div>
        );
    }
}

export default Pricing;