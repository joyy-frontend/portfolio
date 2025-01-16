import React from 'react'

const Skills: React.FC = () => {
  return (
    <>
      <p className='font-SMUSnow font-extrabold text-[#DFAF8E] text-3xl md:text-4xl mb-8 text-center mt-20'>
        Skills
      </p>

      {/* Added container with padding */}
      <div className='px-4 md:px-8'>
        <div id='skills' className='grid grid-cols-4 gap-4'>
          <div className='skill bg-white-100 border-[3px] border-[#DFAF8E] p-4 text-center'>
            <p className='font-bold text-lg'>HTML5 / CSS3</p>
            <ul className="text-lg text-gray-600 list-disc list-outside space-y-2 leading-relaxed pl-6 text-left mt-4">
              {/* User focuses on semantic markup in web design.
User adheres to web standards and works to improve accessibility.
User creates responsive web designs. */}
              <li>Focuses on semantic markup in web design.</li>
              <li>Adheres to web standards and works to improve accessibility.</li>
              <li>Creates responsive web designs.</li>
            </ul>
          </div>
          <div className='skill bg-white-100 border-[3px] border-[#DFAF8E] p-4 text-center'>
            <p className='font-bold text-lg'>JavaScript / TypeScript</p>
            <ul className="text-lg text-gray-600 list-disc list-outside space-y-2 leading-relaxed pl-6 text-left mt-4">
              {/* Skilled in JavaScript and TypeScript for building dynamic and interactive web applications.</li>
              <li>I have hands-on experience with ES6+ features, asynchronous programming, and working with JavaScript frameworks such as React.</li>
              <li>Strong understanding of type safety and code scalability using TypeScript in large-scale projects. */}
              <li>Skilled in JavaScript and TypeScript for dynamic web applications.</li>
              <li>Experience with ES6+, asynchronous programming, and React.</li>
              <li>Understands type safety and code scalability in TypeScript for large-scale projects.</li>
            </ul>
          </div>
          <div className='skill bg-white-100 border-[3px] border-[#DFAF8E] p-4 text-center'>
            <p className='font-bold text-lg'>React</p>
            <ul className="text-lg text-gray-600 list-disc list-outside space-y-2 leading-relaxed pl-6 text-left mt-4">
              <li>Extensive experience in building scalable, high-performance React applications. </li>
              <li>Well-versed in managing state with tools like Redux, Context API, and utilizing hooks for better code maintainability. </li>
              <li>I focus on writing reusable components, optimizing rendering performance, and following best practices for React development.</li>
            </ul>
          </div>
          <div className='skill bg-gray-100 border-[3px] border-[#DFAF8E] p-4 text-center'>
            <p className='font-bold text-lg'>Next JS</p>
            <ul className="text-lg text-gray-600 list-disc list-outside space-y-2 leading-relaxed pl-6 text-left mt-4">
              <li>Proficient in Next.js for server-side rendering, static site generation, and building SEO-friendly React applications.</li>
              <li>Experienced in leveraging its API routes for full-stack applications, optimizing page loading speeds, and managing server-side data fetching.</li>
              <li>Focused on enhancing user experience through server-side rendering and static generation techniques.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
