import React, { Component } from 'react'
import logo from '../Assets/logo.jpg';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';

// TODO: Extend this class to do some more, maybe.
class Home extends Component {
    render() {
        return (
            <div>
                <h3 className='mb-5 mt-2'>Formula 1 information website</h3>
                {this.renderCarousel()}
            </div>
        )
    }
    
    renderCarousel() {
        return (
            <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>

                <ol className='carousel-indicators'>
                    <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
                    <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
                    <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
                </ol>

                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img className='d-block w-100' src={logo} alt='First slide'></img>
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src={image1} alt='Second slide'></img>
                    </div>
                    <div className='carousel-item'>
                        <img className='d-block w-100' src={image2} alt='Third slide'></img>
                    </div>
                </div>

                <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                </a>

                <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                </a>
            </div>
        )
    }
}

export default Home