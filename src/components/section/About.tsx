import React, { useEffect, useState } from 'react'
import AboutContent from '../about/AboutContent';
import { AnimatePresence, Variants, motion, useAnimation } from 'framer-motion';

const Home:React.FC = () => {
  const [showInitialMsg, setShowInitialMsg] = useState<boolean>(true);
  const controls = useAnimation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.7,
      },
    },
  };
  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1, 
      transition: {
        duration: 1.7,
      },
    },
  };
  const messageItemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.8,
      },
    },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowInitialMsg(false);
      controls.start("visible");
      document.body.style.overflow = "";
    }, 2700);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    }
  }, [controls])

  useEffect(() => {
    if (!showInitialMsg) {
      controls.start("visible");
    }
  }, [showInitialMsg, controls]);

  return (
    <AnimatePresence>
      {/* {
        !showInitialMsg && (
          <motion.section className='h-full' initial="hidden" variants={sectionVariants}>
            <motion.div className="flex flex-col w-full justify-center items-center basis-5/12" variants={itemVariants}>
              <motion.p
                className="my-1 text-3xl text-center md:text-5xl font-ghanachocolate absolute top-8 left-7 sm:top-10 sm:left-18 md:top-5 md:left-10 flex flex-col gap-1 md:gap-2 text-stone-800"
                variants={messageItemVariants}
              >
                <span className='font-caveat'>I find joy in</span>
                <span className='font-caveat'> what I do.</span>
              </motion.p>
                <div
                  className="flex flex-row justify-center items-center"
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img 
                    src="/images/joy-profile.jpg" 
                    alt="Profile"        
                    width={600}
                    height={400}
                    fetchPriority="high"
                    className="profile-img rounded-lg object-cover mt-12 sm:mt-14 md:mt-16 lg:mt-20"
                  />
                  <AboutContent />
                </div> 
            </motion.div>
          </motion.section>
        )
      } */}
      <div id='about' className='flex justify-center items-center p-0 m-0 mt-2'>
        <img 
          src="/images/joy-profile.jpg" 
          alt="Profile"        
          width={600}
          height={400}
          fetchPriority="high"
          className="profile-img rounded-lg object-cover mt-12 sm:mt-14 md:mt-16 lg:mt-20"
        />
        <AboutContent />
      </div>
    </AnimatePresence>
  )
}

export default Home;
