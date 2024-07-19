import React from 'react';
import { useInView } from 'react-intersection-observer';
import './works.css';
// img
import mayvis from '../../assets/works/mayvis.webp';
import minipig from '../../assets/works/mini-pigs.webp';
import community from '../../assets/works/community-gallery.webp';
import portfolio from '../../assets/works/portfolio-site.webp';
import todolist from '../../assets/works/to-do-list.webp';
import dell from '../../assets/works/dell-navigation.webp';
import bestbuy from '../../assets/works/bestbuy-prototype.webp';
import animalshelter from '../../assets/works/animal-shelter.webp';

const workItems = [
  {
    id: 1,
    imageUrl: mayvis,
    title: 'Mayvis Estimating Platform | 2024',
    description: 'Laravel • MySQL • Bootstrap • JS',
    pageUrl: 'http://maybis-b.web.dmitcapstone.ca/',
  },
  {
    id: 2,
    imageUrl: minipig,
    title: 'Mini Pig Site Creation | 2024',
    description: 'Joomla • CSS',
    pageUrl: 'https://cmelchor1.dmitstudent.ca/joomla2/',
  },
  {
    id: 3,
    imageUrl: community,
    title: 'Community Gallery CRUD Application | 2024',
    description: 'PHP • Bootstrap 5 • Javascript',
    pageUrl: 'https://cmelchor1.dmitstudent.ca/dmit2503/mu-gallery/index.php',
  },
  {
    id: 4,
    imageUrl: portfolio,
    title: 'Website Portfolio Design | 2024',
    description: 'Material CSS',
    pageUrl: 'https://cmelchor1.ca/portfolio-materialcss/',
  },
  {
    id: 5,
    imageUrl: todolist,
    title: '2 Do List CRUD | 2024',
    description: 'Tailwind • JS • Firebase RTDB',
    pageUrl: 'https://dmit2008-lab4.vercel.app/live-demo.html',
  },
  {
    id: 6,
    imageUrl: dell,
    title: 'Dell Technologies Main Menu Navigation | 2023',
    description: 'Figma • Prototyping',
    pageUrl: 'https://www.figma.com/proto/4p9lSUpvx7vjnQIK2HvvGs/Self-Directed-Learning---December?type=design&node-id=3-334&t=JH9cA35bZe0crdwL-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A10&mode=design',
  },
  {
    id: 7,
    imageUrl: bestbuy,
    title: 'Best Buy Filter Prototype | 2023',
    description: 'Figma • Prototyping',
    pageUrl: 'https://www.figma.com/proto/NQDzobdSFs6rKnygM523mf/DesignPatterns?type=design&t=yXtTrFxfPOrvKfIq-1&scaling=scale-down&page-id=0%3A1&node-id=1-3&starting-point-node-id=1%3A2&mode=design',
  },
  {
    id: 8,
    imageUrl: animalshelter,
    title: 'Edmonton Animal Shelter | 2023',
    description: 'Wordpress',
    pageUrl: 'https://cmelchor1.ca/dmit2032/simple-site/',
  },
];

const Works = () => {
  return (
    <section id="works" className="px-4 py-20 text-gray-700 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-5xl font-bold text-center mb-14 font-judson tracking-wide">Works</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10"> {/* Adjusted for 3 columns on medium screens and larger */}
          {workItems.map(({ id, imageUrl, title, description, pageUrl }, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.6,
            });

            return (
              <div 
                ref={ref}
                key={id} 
                className={`group font-roboto transform transition-all duration-500 ease-in-out ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <a href={pageUrl} target="_blank" className="block">
                  <div className="overflow-hidden w-auto h-full duration-700 ease-in-out">
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"/>
                  </div>
                  <div className="pt-4">
                    <div className="text-xl font-semibold group-hover:underline">{title}</div>
                    <div className="text-md text-gray-600">{description}</div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
