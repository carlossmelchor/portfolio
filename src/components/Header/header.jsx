import React from "react";
import './header.css';

// Strokes
import stars from '../../assets/strokes/star-2.svg';
import shade1 from '../../assets/strokes/shade-1.svg';
import shade2 from '../../assets/strokes/shade-2.svg';
import arrow from '../../assets/strokes/arrow.svg';
import star from '../../assets/strokes/star-1.svg';
import oval from '../../assets/strokes/oval.svg';
import curve2 from '../../assets/strokes/curve-2.svg';
import plane from '../../assets/strokes/plane.svg';

const Header = () => {
    return (
        <section id="header" className="flex flex-col items-center justify-center h-screen text-center p-4 fadeIn">
            <div className="w-full max-w-2xl mx-auto">
                <h2 className="font-semibold text-gray-800 mb-2 font-judson text-6xl leading-normal">
                    <span className="crafting-container inline-block relative">crafting<img src={stars} alt="Stars" className="stars-decor" /></span> <span className="digital-container inline-block relative">digital<img src={shade2} alt="Lengthy Crayon Shade" className="crayon-decor" /></span> experiences with a <span className="creative-container inline-block relative">creative<img src={shade1} alt="Crayon Shade" className="shade-decor" /><img src={arrow} alt="Sketched Arrow" className="arrow-decor" /></span> <span className="touch-container inline-block relative">touch<img src={star} alt="Single star" className="single-decor" /></span>
                </h2>
                <div className="max-w-lg mx-auto">
                    <p className=" text-gray-700 font-roboto text-xl leading-loose tracking-wide">
                        Hi, <span className="name-container inline-block relative">I'm Carlos,<img src={oval} alt="Circle sketch" className="oval-decor" /></span> a Web Developer & Designer with a love for <span className="hobby-container inline-block relative">painting<img src={curve2} alt="Paint stroke" className="curve-decor" /></span> and digital art. I thrive on creating visually captivating digital <span className="plane-container inline-block relative">experiences.<img src={plane} alt="Paper Airplane Sketch" className="plane-decor" /></span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Header;
