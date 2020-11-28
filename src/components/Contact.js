import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  

        <div className='contact'>
            <h2>MAKE A STATEMENT</h2>
        <p id='statement'>
        <a id='bold'>Anomaly Productions</a> specializes in event coordination and talent procurement for all tastes and occasions.
        
         us to see how we can customize a unique experience for your customers, guests, or audiences.</p>
         <ul id='social'>
             <li><a href='https://twitter.com/anomalypro1'>Twitter</a></li>
             <li><a href='https://www.instagram.com/anomalypro__/?igshid=14rocwq5ridbh'>Instagram</a></li>
             <li><a href='https://www.facebook.com/anomalypro/'>Facebook</a></li>
             <li><a href='https://www.youtube.com/channel/UCxEs0_Y8AiFH6JUrH7Z4Ucw?view_as=subscriber'>Youtube</a></li>
         </ul>


        <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
        </div>
        </Fade>
        </div>);
    }
}
 
export default Contact;