
import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import ifk from '../images/head/ifk1.jpg'
import ifk2 from '../images/head/ifk2.jpg'
import ifk3 from '../images/head/ifk3.jpg'
const TitleSlide = () => {
  const fadeImages = [
    ifk2,
    ifk3
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
            <img src={fadeImages[0]} />
          </div>                                               
        </Fade>
      </div>                                                                                              
    </div>
  );
};

export default TitleSlide;