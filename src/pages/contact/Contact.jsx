import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import "./contact.css"
const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className="section-title">Get In <span>Touch</span>
      </h2>
      <div className="contact-container container grid">
        <div className="container-data">
          <h3 className="contact-title">Feel free to reach out to me ! </h3>
          <p className="contact-description">I welcome any opportunity to connect and explore discussions on innovative projects, creative concepts,
           or potential collaborations that align with your vision. Please feel free to reach out, 
           as I'm open to engaging in conversations and exploring exciting possibilities together.
           </p>
           <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className='info-icon' />
              <div>
                <span className="info-title">Mail me</span>
                <h4 className="info-desc">miraoui.mehdi.pro@gmail.com</h4>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneSquareAlt className='info-icon' />
              <div>
              <span className="info-title">Call me</span>
                <h4 className="info-desc">+213 779 20 39 18</h4>
              </div>
            </div>
           </div>
           <div className="contact-socials">
           <a href="https://www.instagram.com/mehdi_bean/" className="contact-social"><FaInstagram /></a>
           <a href="https://www.instagram.com/mehdi_bean/" className="contact-social"><FaFacebookF /></a>
           </div>
           </div>
           <form className="contact-form">
            <div className='form__input-group'>
              <div className="form-input-div">
                <input type="text" placeholder='Your Name'  className="form-control" />
              </div>
              <div className="form-input-div">
                <input type="email" placeholder='Your Email'  className="form-control" />
              </div>
              <div className="form-input-div">
                <input type="text" placeholder='Your Subject'  className="form-control" />
              </div>
            </div>

            <div className="form-input-div">
                <textarea placeholder='Your Message' className="form-control textarea"></textarea>
              </div>
              <button className='button'>Send Message <span className="button-icon contact-button-icon"> <FiSend/> </span></button>
           </form>
      </div>
    </section>
  );
};

export default Contact