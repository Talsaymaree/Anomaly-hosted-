import React, { Component } from 'react';
import { useRef } from "react";
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { Slide } from "react-slideshow-image";

class Work extends Component {
    state = {  }


    render() { 

        return (<div>
        <h1 className='heading'>

        <Fade bottom cascade>Events.</Fade></h1>

            </div> );
    }
}
 
export default Work;