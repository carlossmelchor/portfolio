import React from 'react';
import './skills.css';
import { useInView } from 'react-intersection-observer';

import curve from '../../assets/strokes/curve-2.svg';
// SVG Imports
import HTML from '../../assets/svg/html.svg';
import CSS from '../../assets/svg/css.svg';
import PHP from '../../assets/svg/php.svg';
import Bootstrap from '../../assets/svg//bootstrap.svg';
import Tailwind from '../../assets/svg/tailwind.svg';
import Wordpress from '../../assets/svg/wordpress.svg';
import Joomla from '../../assets/svg/joomla.svg';
import Laravel from '../../assets/svg/laravel.svg';
import ReactIcon from '../../assets/svg/react.svg';
import Figma from '../../assets/svg/figma.svg';

const skillSet = [
  { id: 1, icon: HTML, title: 'HTML' },
  { id: 2, icon: CSS, title: 'CSS' },
  { id: 3, icon: PHP, title: 'PHP' },
  { id: 4, icon: Bootstrap, title: 'Bootstrap' },
  { id: 5, icon: Tailwind, title: 'Tailwind' },
  { id: 6, icon: Wordpress, title: 'Wordpress' },
  { id: 7, icon: Joomla, title: 'Joomla' },
  { id: 8, icon: Laravel, title: 'Laravel' },
  { id: 9, icon: ReactIcon, title: 'React' },
  { id: 10, icon: Figma, title: 'Figma' },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section ref={ref} id="skills" className="max-w-6xl mx-auto px-4 py-8 text-gray-700 my-24">
      <div className="text-5xl font-bold text-center mb-14 font-judson tracking-wide"><div className='title-container'>Skillset<img src={curve} alt="Pointing arrow" className="curve-decor" /></div></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-9 skills-grid font-roboto">
        {skillSet.map(({ id, icon, title }, index) => (
          <div
              key={id}
              style={{
                  transitionDelay: `${inView ? index * 100 : 0}ms`,
              }}
              className={`flex flex-col items-center justify-center opacity-0 transition-opacity duration-700 ${inView ? 'opacity-100' : ''}`}
          >
              <div className="w-40 h-40 rounded-lg overflow-hidden">
                  <img src={icon} alt={title} className="w-full h-full" />
              </div>
              <div className="mt-2 text-xl font-normal">{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
