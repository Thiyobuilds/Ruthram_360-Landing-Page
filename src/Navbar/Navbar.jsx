import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { MdOutlinePhone } from "react-icons/md";
import { TbMenu4 } from "react-icons/tb";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const navRef = useRef(null);
  const hamRef = useRef(null);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(prev => !prev);
  };

  const handleCloseNav = () => {
    setIsMobileNavVisible(false);
  };

  // Close nav-sm when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamRef.current &&
        !hamRef.current.contains(event.target)
      ) {
        setIsMobileNavVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-con">
          <div className="logo">
            <span>Ruthram 360</span>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Works</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="nav-btn">
            <a href="#"><MdOutlinePhone /> Let's Talk</a>
          </div>
        </div>
        <div className="ham" onClick={toggleMobileNav} ref={hamRef}>
          <TbMenu4 />
        </div>
      </div>

      <div className={`nav-sm ${isMobileNavVisible ? 'active' : ''}`} ref={navRef}>
        <div className="nav-links">
          <ul>
            <li><a href="#" onClick={handleCloseNav}>Home</a></li>
            <li><a href="#" onClick={handleCloseNav}>About Us</a></li>
            <li><a href="#" onClick={handleCloseNav}>Our Works</a></li>
            <li><a href="#" onClick={handleCloseNav}>Services</a></li>
            <li><a href="#" onClick={handleCloseNav}>Contact Us</a></li>
          </ul>
        </div>
        <div className="nav-btn">
          <a href="#" onClick={handleCloseNav}><MdOutlinePhone /> Let's Talk</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
