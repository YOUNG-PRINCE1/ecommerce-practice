import React from 'react'
import HEROIMG from '../../assets/purepng1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import './hero.css'


const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration:1000,
            once: false,
            easing: 'ease-in-out',
        });
    },[]);
  return (
    <div>
        <div className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 data-aos="fade-right">We value our customer</h1>
                        <p data-aos="fade" data-aos-delay="300">Welcome to our amazing shop,where
                             vertually everything is sold</p>
                        <button className="btn btn-primary" data-aos="fade-up" data-aos-delay="600">create an account</button>
                    </div>
                    <div className="col-md-5" data-aos="fade-left" data-aos-delay="400">
                        <img src={HEROIMG} alt="" />
                     </div>
                </div>
            </div> 
            
            
        </div>
    </div>
  )
}

export default Hero