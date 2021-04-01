import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  

        <div className='contact'>
        <p id='statement'>
        <a id='bold'>Anomaly Productions</a> Event coordination, Talent Procurement, Tour management, and everything else in between. 
        
         For all business and creative inquiries: </p>

        <h1>
                 Inquries
        </h1>
     
        <div className='contact-content'>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
        </div>
     
        </div>);
    }
}
 
export default Contact;