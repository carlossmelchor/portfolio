import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/cl-logo.webp';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
        <div className="flex space-x-7 justify-center">
            <a href="#" className="flex items-center py-4 px-2">
              <img src={logo} alt="Carlos' Portfolio Logo"/>
            </a>
          </div>
          <div className={`flex items-center justify-center space-x-10 md:space-x-2`}>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-primary-700  transition duration-300 cursor-pointer">About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-primary-700  transition duration-300 cursor-pointer">Portfolio</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-primary-700  transition duration-300 cursor-pointer">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

