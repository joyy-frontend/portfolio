import React from 'react'
import AboutContent from '../about/AboutContent';
import { AnimatePresence } from 'framer-motion';

const Home:React.FC = () => {
  return (
    <div id='about' className='flex justify-center items-center p-0 m-0 mt-2'>
      <img 
        src="/images/joy-profile.jpg" 
        alt="Profile"        
        width={600}
        height={400}
        fetchPriority="high"
        className="rounded-lg object-cover mt-12"
      />
      <AboutContent />
    </div>
  )
}

export default Home;
