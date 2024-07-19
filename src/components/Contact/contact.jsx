import React, { useState, useEffect, useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

import crown from '../../assets/strokes/crown.svg';
import sparkle from '../../assets/strokes/sparkle.svg';
import plane from '../../assets/strokes/plane.svg';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatePlane, setAnimatePlane] = useState(false);
    const formRef = useRef(null);

    const toggleVisibility = () => {
        if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setAnimatePlane(true);
    
        emailjs.sendForm('service_bthq5t5', 'template_kgmap56', formRef.current, 'nK71R0QreqZrrBEm1')
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            alert("Message sent successfully!");
            formRef.current.reset();
            setAnimatePlane(false);
        }, (error) => {
            console.log('Failed to send email. Error: ', error.text);
            alert("Failed to send message. Please try again.");
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <section id="contact" className="max-w-7xl mx-auto px-4 py-8 text-gray-700">
            <div className='container mx-auto w-full md:w-8/12 lg:w-7/12 xl:w-7/12 2xl:w-6/12'>
                <div className="text-5xl font-bold mb-14 font-judson tracking-wide text-center">
                    <div className='title-container'>Get In Touch<img src={sparkle} alt="Sparkle Sketch" className="sparkle-decor" /><img src={crown} alt="Crown Scribbles" className="crown-decor" /></div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
                    <form ref={formRef} onSubmit={handleFormSubmit} className="w-full">
                        <input type="text" name="_honey" className='hidden'/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="text" required placeholder="Your Name" className="block w-full p-2 mb-4 rounded-md border-2 border-gray-300" name="name"/>
                        <input type="email" required placeholder="Your Email" className="block w-full p-2 mb-4 rounded-md border-2 border-gray-300" name="email"/>
                        <textarea name="message" rows="5" required placeholder="Your Message" className="block w-full p-2 mb-4 rounded-md border-2 border-gray-300"></textarea>
                        <div className='btn-container'>
                            <img src={plane} alt="Plane Sketch" className={`plane-decor ${animatePlane ? 'slide-out' : ''}`} />
                            <button type="submit" className="cursor-pointer mt-4 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-blue-300 transition-colors duration-300 ease-in-out" value="Send">Send</button>
                        </div>
                    </form>
                </div>
                {isVisible && (
                    <button onClick={scrollToTop} className="p-2 bg-gray-800 text-white font-bold rounded-full hover:bg-gray-700 transition duration-300 ease-in-out fixed bottom-8 right-8 cursor-pointer">
                      ↑ Back to Top
                    </button>
                )}
            </div>
        </section>
    );
};

export default Contact;
