import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import "./home.css"
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home-img" />
      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title"><span>I'm Mehdi Miraoui</span> Web developper</h1>
          <p className="home-description">  I'm a passionate web developer with expertise in front-end technologies. 
  My goal is to create engaging and user-friendly web experiences that leave a lasting impression.
  Let's bring your ideas to life!</p>
            <Link to='/about' className='button'>More About Me <span className='button-icon'><FaArrowRight/>
            </span>
            </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home