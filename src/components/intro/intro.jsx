import React from 'react';
import './intro.css';
import photo from "../../assets/image.png";
import {Link} from "react-scroll";
import btnImg from "../../assets/hireme.png";
   
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
      <span className="hi">Hi,</span>
      <span className="introtext">I'm <span className="introName">Ujjwal </span><br /> Web Devoloper </span>
      <p className="intropara">Aspiring web developer with a passion for coding and a <br /> commitment to learning and growing in the field.</p>
      <Link> <button className='btn'><img src={btnImg} alt="hire me" className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={photo} alt="my image" className='bg'/>
    </section>
  )
}

export default Intro;