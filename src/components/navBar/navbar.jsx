import React, { useState } from 'react'
import './navbar.css';
import logo from "../../assets/logo.png";
import {Link} from "react-scroll";//install react scroll first using npm i react-scroll
import contactImage from "../../assets/contact.png"
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showmenu,setShowMenu]=useState(false);
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <div className="menu">
        <Link activeClass='active' to='intro' smooth={true} spy={true} duration={500} offset={-100} className="item">Home</Link>
        <Link activeClass='active' to='skills' smooth={true} spy={true} duration={500} offset={-78}  className="item" >About</Link>
        <Link activeClass='active' to='works' smooth={true} spy={true} duration={500} offset={-70}  className="item" >Portfolio</Link>
        <Link activeClass='active' to='contactMe' smooth={true} spy={true} duration={500} offset={-70}  className="item">Client</Link>
      </div>
      <button className="desktopMenuButton" onClick={()=>{
        document.getElementById("contactMe").scrollIntoView({behavior:"smooth"});
      }
      }>
          <img src={contactImage} alt="" className="desktopMenuImage"/>
          Contact me
      </button>

      <img src={menu} alt="burgerMenu" className='mobmenu' onClick={()=>setShowMenu(!showmenu)}/>
      <div className="navmenu" style={{display:showmenu?"flex":"none"}}>
        <Link activeClass='active' to='intro' smooth={true} spy={true} duration={500} offset={-100} className="Listitem"  onClick={()=>{setShowMenu(false)}}>Home</Link>
        <Link activeClass='active' to='skills' smooth={true} spy={true} duration={500} offset={-78}  className="Listitem"  onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link activeClass='active' to='works' smooth={true} spy={true} duration={500} offset={-70}  className="Listitem"  onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
        <Link activeClass='active' to='contactMe' smooth={true} spy={true} duration={500} offset={-70}  className="Listitem"  onClick={()=>{setShowMenu(false)}}>Client</Link>
      </div>
    </div>
  )
}

export default Navbar;