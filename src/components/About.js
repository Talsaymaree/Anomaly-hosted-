import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div >
            
            <h1 id='about-title'><Fade bottom cascade>Mission.</Fade></h1>
             <div className='about-content'>
                 </div>    
            <div className='about-image-text'>
                        
              
            <Fade bottom id='fade'>
                    <p>{data.abouttext}</p>
            </Fade>
             
            </div>

        </div>  );
    }
}
 
export default About;