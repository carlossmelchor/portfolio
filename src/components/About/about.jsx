import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import './about.css';
import portrait from '../../assets/portrait.webp';
import oval from '../../assets/strokes/oval.svg';
import link from '../../assets/strokes/link.svg';
import cat from '../../assets/strokes/cat.svg';
import diamonds from '../../assets/strokes/diamonds.svg';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const fadeIn = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: !inView,
        delay: 200,
    });

    return (
        <section id="about" ref={ref} className="max-w-6xl mx-auto px-4 py-8 max-h-full mb-20">
            <animated.div style={fadeIn} className="flex flex-wrap md:flex-nowrap items-center">
                <div className="md:flex-1 md:pr-8 image-container">
                    <img src={portrait} alt="Portrait shot of Carlos" className="block mx-auto md:mx-0" />
                    <img src={cat} alt="Circle sketch" className="cat-decor sm-hidden" />
                    <img src={diamonds} alt="Circle sketch" className="diamonds-decor sm-hidden" />
                </div>
                <div className="flex-1 mt-6 md:mt-0 md:pl-8">
                    <div className="font-roboto text-center md:text-left text-gray-700 text-xl tracking-wide">
                        <p className="mb-8">I'm always eager to explore new techniques, tools, and design trends. I believe in the power of continuous learning to stay at the forefront of the industry.</p>
                        <p className="mb-8">Each project is an opportunity for me to push creative boundaries and refine my skills.</p>
                        <p className="mb-8">I'm excited about the potential of web design to tell compelling stories and leave a lasting impression.</p>
                        <div className="link-container">
                            <Link activeClass="active" to="contact" className="mt-4 px-4 py-2 cursor-pointer link-style inline-block relative">Get in Touch</Link>
                            <img src={oval} alt="Circle sketch" className="oval-decor" />
                            <img src={link} alt="Pointing arrow" className="link-decor sm-hidden" />
                        </div>
                    </div>
                </div>
            </animated.div>
        </section>
    );
};

export default About;
