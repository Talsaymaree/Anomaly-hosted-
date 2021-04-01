import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div >
            
            <h1 id='about-title'>Mission.</h1>
             <div className='about-content'>
                 </div>    
            <div className='about-image-text'>
                        
              
            
                    <p>{data.abouttext}</p>

             
            </div>

        </div>  );
    }
}
 
export default About;