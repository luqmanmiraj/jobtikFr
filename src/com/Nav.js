
import "./Nav.css";

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
    //save scrool value
    const [scroll, setScroll] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  //scroll function
useEffect(() => {
    const onScroll = e => {
        console.log(e.target.documentElement.scrollTop);
        if(scroll < e.target.documentElement.scrollTop)
        {
            // document.querySelector(".navbar").style.display = "none";

        }
        else{
            document.querySelector(".navbar").style.display = "flex";
        }
        setScroll(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, [scroll]);
  return (
    <nav className="navbar" >
      {/* <div className="navbar-brand">
        <a href="/">JobTik</a>
        <button className="navbar-toggle" onClick={toggleNav}>
          <span className="navbar-toggle-icon"></span>
        </button>
      </div> */}
      <ul className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a href="#algo">Algo</a>
        </li>
        <li className="navbar-item">
          <a href="#react">React</a>
        </li>
        <li className="navbar-item">
          <a href="#frontend">Front-End</a>
        </li>
        <li className="navbar-item">
            <a href="#backend">Back-End</a>
        </li>
        <li className="navbar-item">
            <a href="#reactnative">ReactNative</a>
        </li>
        <li className="navbar-item">
            <a href='#devops'>DevOps</a>
        </li>
        <li className="navbar-item">
            <a href="#cloud">Cloud</a>
        </li>
        <li className="navbar-item">
            <a href="#db">DB</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
