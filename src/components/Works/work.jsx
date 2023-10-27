import React from 'react'
import "./work.css";
import img1 from "../../assets/portfolio-1.png"
import img2 from "../../assets/portfolio-2.png"
import img3 from "../../assets/portfolio-3.png"
import img4 from "../../assets/portfolio-4.png"
import img5 from "../../assets/portfolio-5.png"
import img6 from "../../assets/portfolio-6.png"

const Work = () => {
  return (
    <section id='works'>
      <h2 className="worktitle">My Portfolio</h2>
      <span className="workDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum, doloremque amet dignissimos quasi possimus tempora dolor? Consequuntur, repellendus laudantium obcaecati nesciunt iste, magnam quas in tempore eum eveniet doloribus.</span>
      <div className="workImgs">
        <img src={img1} alt="" className="workImg" />
        <img src={img2} alt="" className="workImg" />
        <img src={img3} alt="" className="workImg" />
        <img src={img4} alt="" className="workImg" />
        <img src={img5} alt="" className="workImg" />
        <img src={img6} alt="" className="workImg" />
      </div>
      <button className="see">See More</button>
    </section>
  )
}

export default Work;