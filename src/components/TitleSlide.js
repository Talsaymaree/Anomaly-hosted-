
import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import ifk from '../images/head/ifk1.jpg'
import ifk2 from '../images/head/ifk2.jpg'
import ifk3 from '../images/head/ifk3.jpg'
import ifk4 from '../images/head/ifk44.jpg'
import ifk5 from '../images/head/ifk7.jpg'
const TitleSlide = () => {
  const fadeImages = [
    ifk4,
    ifk2,
    ifk
  ];

  const [autoplay, setAutoplay] = useState(true);

  const [arrows, setArrows] = useState(false);

  return (
    <div>
      <div className="fadeContainer">
        <Fade arrows={arrows} autoplay={autoplay}>
          <div className="each-fade">
            <img src={fadeImages[0]} />
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} />
          </div>                               
          <div className="each-fade">
            <img src={fadeImages[2]} />
          </div>                               
        </Fade>
      </div>                                                                                              
    </div>
  );
};

export default TitleSlide;