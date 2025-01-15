import React from 'react'

const Projects:React.FC = () => {
  return (
    <>
      <p className='font-SMUSnow font-extrabold text-gray-800 text-lg md:text-xl mb-8 text-center mt-10'>Projects</p>
      <div id="projects" className="grid grid-cols-3 gap-4 p-4">
        <div className="project bg-gray-100 border border-gray-300 p-4 text-center">
          Project 1
        </div>
        <div className="project bg-gray-100 border border-gray-300 p-4 text-center">
          Project 2
        </div>
        <div className="project bg-gray-100 border border-gray-300 p-4 text-center">
          Project 3
        </div>
        <div className="project bg-gray-100 border border-gray-300 p-4 text-center">
          Project 4
        </div>
        <div className="project bg-gray-100 border border-gray-300 p-4 text-center">
          Project 5
        </div>
        <div className="project bg-gray-100 border border-gray-300 p-4 text-center">
          Project 6
        </div>
      </div>
    </>
  )
}

export default Projects
