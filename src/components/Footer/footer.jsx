import React from 'react';
import './footer.css';

import { MdEmail, MdPhone} from 'react-icons/md';

import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
<footer id="footer" className="max-w-7xl mx-auto px-4 py-8 text-gray-700 flex justify-between items-center">
    <div className="contact-details w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 font-roboto">
        <div className="flex">
            <p className="flex-1 mr-4 mb-0"><MdEmail className="inline mr-2 text-2xl"/>melchorcarloslouise@gmail.com</p>
            <p className="flex-1 mb-0"><MdPhone className="inline mr-2 text-2xl"/>+1 780-299-9491</p>
        </div>
    </div>
    {/* Social Media Icons in one line */}
    <div className="flex justify-end space-x-4 me-10">
        <a href="https://www.linkedin.com/in/carlos-louise-m-025100202/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-2xl hover:text-blue-600 transition-colors duration-300 ease-in-out"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100072572684772" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl hover:text-blue-800 transition-colors duration-300 ease-in-out"/>
        </a>
        <a href="https://www.instagram.com/carlossmelchor" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-600 transition-colors duration-300 ease-in-out"/>
        </a>
    </div>
</footer>

    );
};

export default Footer;
