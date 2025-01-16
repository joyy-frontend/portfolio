import React from 'react';
import { FaReact } from 'react-icons/fa'; 
import { SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const AboutContent:React.FC = () => {
  return (
    <div className='ml-4 sm:ml-8 md:ml-12 lg:ml-20 mb-4 mt-20 tracking-wide flex flex-col gap-1 text-stone-600'>
      <p className='font-SMUSnow font-extrabold text-gray-800 text-lg md:text-xl mb-8'>About Me</p>
      <p className='text-sm sm:text-base lg:text-lg md:text-lg'>
        Hi, I'm Joy, a frontend developer. 
      </p>
      <p className='text-sm sm:text-base mt-2 lg:text-lg md:text-lg'>
        I'm always trying to find joy in what I do.
      </p>
      <p className='text-sm sm:text-base mt-2 lg:text-lg md:text-lg'>
        I believe that no matter what I do, if I enjoy it, good results will always follow. 
      </p>
      <p className='text-sm sm:text-base mt-2 lg:text-lg md:text-lg'>
        To my coworkers, I want to be the person they enjoy working with.
      </p>
      {/* <p className='text-sm sm:text-base mt-2 lg:text-lg md:text-lg'>
        While working, I focus on both DX that brings joy to my coworkers and UX that delights users. 
      </p> */}
      <p className='text-sm sm:text-base mt-2 lg:text-lg md:text-lg'>
        I enjoy meeting people and am interested in working with diverse professionals to create great results. 
      </p>
      <p className='text-sm sm:text-base mt-2 lg:text-lg md:text-lg'>
        I aim for collaboration that satisfies everyone by actively communicating and always looking for areas to improve.
      </p>
      <div className='flex gap-6 mt-4'>
        <FaReact className="text-blue-500 text-3xl" title="React" />
        <SiTypescript className="text-blue-700 text-3xl" title="TypeScript" />
        <RiTailwindCssFill className="text-blue-700 text-3xl" title="Tailwind" />
        <RiNextjsFill className="text-blue-700 text-3xl" title="Nextjs" />
        <FaHtml5 className="text-blue-700 text-3xl" title="html" />
        <FaCss3Alt className="text-blue-700 text-3xl" title="css" />
      </div>
    </div>
  )
}

export default AboutContent
