import React from 'react'
import '../App.css'
import Header from './Header'
import fitimage from '.././assets/hero_image.png'
import hero_image_back from '.././assets/hero_image_back.png'
import Heart from '.././assets/heart.png'
import calories from '.././assets/calories.png'

const Hero = () => {
  return(
    <div className="hero">
        <div className="left-hero">
          <Header />
          
          <div className="the-best-ad">
            <div></div>
              <span>The best fitness club  in town</span>
          </div>

          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div><span>Ideal body</span></div>
            <div>
              <span>
                ojnsjaldcbladbjabdljcladjlajdlbjabdlcbac
                ljaldjcladcjnsjlzjcn
              </span>
            </div>
          </div>

          {/* figures */}
          <div className="figures">
            <div>
              <span>+140 </span>
              <span>expert coachs</span>
            </div>
            <div>
              <span>+978 </span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50 </span>
              <span>fit programs</span>
            </div>
          </div>          
          {/* figures */}

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>          
          </div>
        </div>


        <div className="right-hero">
          <button className="btn">Join Now</button>

          <div className="heart-rate">
            <img src={Heart} alt="" />     
            <span>Heart Rate</span><span>116 bpm</span>
          </div>      
        </div>

    </div>
  )
}

export default Hero