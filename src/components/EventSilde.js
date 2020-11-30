import React, { useRef } from "react";
import { Fade } from 'react-slideshow-image';
import ss199x from '../images/SS199X/ss199x.jpg'
import gold from '../images/SS199X/ss1.jpg'
import ch4in from '../images/SS199X/ss2.jpg'
import dvdv from '../images/SS199X/ss3.jpg'
import kadisa from '../images/POC/kadisa.jpg'
import edyth from '../images/POC/edyth.jpg'

import poc from '../images/POC/poc.jpg'
const TitleSlide = () => {
  const slideRef = useRef();

  const fadeImages = [
    ss199x,
    poc,
    gold,
    ch4in,
    dvdv,
    kadisa,
    edyth
  ];
 const properties = {
    autoplay: false,
    arrows: false
  };

  const back = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  }

  return (
    <div>
      <div className="slide-container">
        <Fade ref={slideRef} {...properties}>
          <div className="each-slide"> 
           <div className='poster'>  
    
              <div id='selector'>            
                     <h1 className='event-name'>                    Super Sonic 199X
                     </h1>   
                <div className="autoplay-buttons">
                  <button id='backArrow' type="button" onClick={back}><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 477.175 477.175" fill="#fff" space="preserve">
                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		                          c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                          </svg>
                  </button>
                  <button id='frontArrow' type="button" onClick={next}><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 477.175 477.175" fill="#fff" space="preserve">
                    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
	                	        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		                         "/></svg>
                  </button>
                </div>

                 

                <div className='videoContainer'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/HhbSAFf8Kdc" frameborder="0" ></iframe>
                
                  <p>
                    An intimate evening of sights, sounds, and fresh dumplings at the Institut Français du Koweit. Featuring musical performances and visual prompts by local artists and producers, Kadisa & Edyth.
                     Only made possible with the support of our family from the one and only Juke Productions.
                    With additional local support from vendors at WUFU Dumpling Bar and The Enlited Store.
                  </p>            

                  <img id='dvdv'  src={fadeImages[4]} />
                  
                  </div>              
                  </div>
                  <img id='ssx' src={fadeImages[0]} />
                 
            </div>
            <div className='artist-info'>
              <p> DVDV <a href="http://dvdv.space/">http://dvdv.space/</a> </p>  
            <iframe id='dvdvsc' width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/302617354&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>
                                   
                                   <img  src={fadeImages[3]} />
                   <iframe id='spotify-embed' src="https://open.spotify.com/embed/artist/5BcginI7QeBe0qNsOyW7SR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  <p> CH4iNS4W <a href="https://linktr.ee/ch4ins4w">https://linktr.ee/ch4ins4w</a> </p>
                  
                  <img  src={fadeImages[2]} /> 
                  <iframe id='spotify-embed' src="https://open.spotify.com/embed/artist/2uF8KZ5iEKsGdxfX2mhzFf" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  <p> GOLD PLATES / EDYTH <a href="https://linktr.ee/edythmusic">https://linktr.ee/edythmusic</a> </p>
              
            </div>   
          </div>


          <div className="each-slide" id='sauce'> 
           <div className='poster'>         
              <div id='selector'>   
              
                     <h1 className='event-name'> Proof Of Concept  </h1>

                     <div className="autoplay-buttons">
                  <button id='backArrow' type="button" onClick={back}><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 477.175 477.175" fill="#fff" space="preserve">
                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		                          c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                          </svg>
                  </button>
                  <button id='frontArrow' type="button" onClick={next}><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 477.175 477.175" fill="#fff" space="preserve">
                    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
	                	        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		                         "/></svg>
                  </button>
                </div>
    
                     <div className='videoContainer'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/i9CaOXAkWu0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p id='desc'>proof of concept wrap video (footage captured and manipulated by The Juke Productions)</p>
            </div> 
                               
              <img id='poc' src={fadeImages[1]} /> 
                  <p>
                    An intimate evening of sights, sounds, and fresh dumplings at the Institut Français du Koweit. Featuring musical performances and visual prompts by local artists and producers, Kadisa & Edyth.
                     Only made possible with the support of our family from the one and only Juke Productions.
                    With additional local support from vendors at WUFU Dumpling Bar and The Enlited Store.
                  </p>
                  <div className='artist-info'>    
                  <img id='fixOne'  src={fadeImages[5]} />
                  <iframe id="scOne" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469733409&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>
                  <p> KADISA <a href="https://soundcloud.com/kadisabincat">https://soundcloud.com/kadisabincat</a> </p>
                  
                  <img id='fixTwo'  src={fadeImages[6]} />
                  <iframe id="scTwo"width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251834158&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>
                  <p> EDYTH <a href="https://linktr.ee/edythmusic">https://linktr.ee/edythmusic</a></p></div>
                  </div>
                  
            </div>    
            
          </div>
        </Fade>
      </div>

    </div>
  );
};

export default TitleSlide;