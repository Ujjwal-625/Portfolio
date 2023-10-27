import React from 'react'
import "./about.css";
import img1 from "../../assets/ui-design.png";
import img2 from "../../assets/website-design.png";
import img3 from "../../assets/app-design.png";
const About = () => {
  return (
    <section id="skills">
      <div className='skillTitle'>What I do</div>
      <span className="skillDec">I'm enthusiastic about learning and contributing to web projects. I write code, assist with development tasks, and collaborate with experienced developers to build and improve websites.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={img1} alt="" className='skillbarimg'/>
          <div className="skillbartext">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cupiditate provident. Quod sunt eos, praesentium autem eum esse inventore ipsa consequuntur aut, est, itaque rerum.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={img2} alt="" className='skillbarimg'/>
          <div className="skillbartext">
            <h2>Website Design</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat praesentium, saepe ab esse distinctio eaque, rerum velit dolores voluptatibus maxime possimus asperiores! Assumenda fuga id quos doloremque. Nisi, numquam error?</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={img3} alt="" className='skillbarimg'/>
          <div className="skillbartext">
            <h2>Android devolopment</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur rerum fugiat provident similique voluptates voluptas ipsa, facilis iusto autem sit accusantium repudiandae quidem sequi assumenda doloremque odio iure praesentium!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About