import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() { 
    // <h1><Fade bottom cascade>{data.name}</Fade></h1> 
        return (<div className='header-container'>
           


        <h1 className='heading-background'>A Divergence From the Standard
        </h1>
            <header className='header-title'>
               
                               <div>
            {data.ShowHeaderImage ? <img src={data.headerImage} alt='Header Image'></img> : null}     
                    </div>
            </header>

            <header className='header-logo'>
               
               <div>
{data.ShowAnom ? <img src={data.Anom} alt='Anomaly'></img> : null}     
    </div>
</header>
            <Fade bottom>


            </Fade>


        </div>);
    }
}

export default Header;