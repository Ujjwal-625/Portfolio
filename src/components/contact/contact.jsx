import React, { useRef } from 'react'
import "./contact.css"
import insta from "../../assets/instagram.png"
import fb from "../../assets/facebook-icon.png"
import x from "../../assets/twitter.png"
import yt from "../../assets/youtube.png"
const Contact = () => {
  return (
    <footer id="contactMe">
      <h2 className='heading'>Contact Me</h2>
      <span className='Contactdesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus officiis soluta asperiores culpa accusantium quos?</span>
      <form className='contactForm'>
        <input type="text" className="name" placeholder='Your Name'/>
        <input type="email" className="email" placeholder='Your Email'/>
        <textarea row="5" placeholder='your message' className="msg" />
        <button className="submit" type='submit' value="send">submit</button>
        <div className="links">
          <img src={fb} alt="link images" className='linkImg'/>
          <img src={insta} alt="link images" className='linkImg'/>
          <img src={x} alt="link images" className='linkImg'/>
          <img src={yt} alt="link images" className='linkImg'/>
        </div>
      </form>
    </footer>
  )
}

export default Contact;