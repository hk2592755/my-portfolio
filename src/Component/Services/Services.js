import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">
        {/* left side*/}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>I would dedicate myself towards the achievement of company’s objectives</span>
            <span>while maintaining excellent interpersonal relationships with my fellow
            workers.</span>

            <button className='button s-button'>Download CV</button>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>

        </div>
        {/* right side */}
        <div className="cards">
           <div>
               <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Laravel, .Net, and, .Net Core"} 
               />
           </div>
        </div>
    </div>
  )
}

export default Services