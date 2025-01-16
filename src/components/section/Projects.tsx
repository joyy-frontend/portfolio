import React from 'react';
import { FaReact } from 'react-icons/fa'; 
import { SiTypescript } from 'react-icons/si'; 
import { SiWeb3Dotjs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";

import ethereumImage from '../../assets/images/ethereum-project.jpeg';
import cookit from '../../assets/images/cookit.png';
import expenseTracker from '../../assets/images/expense.png';

const Projects: React.FC = () => {
  return (
    <>
      <p className="font-SMUSnow font-extrabold text-[#4561B7] text-3xl md:text-4xl mb-8 text-center mt-16">
        Projects
      </p>
      <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        <div className="project bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center">
          <a href='https://github.com/joyy-frontend/NFT_DApp_Project'>
            <img
              src={ethereumImage} 
              alt="no image"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">NFT DApp Project</h3>
            <p className="text-sm text-gray-600">
              {/* This is a description of Project 1. Add a short overview of the project here. */}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <FaReact className="text-blue-500 text-2xl" title="React" />
              <SiTypescript className="text-blue-700 text-2xl" title="TypeScript" />
              <SiWeb3Dotjs className="text-blue-700 text-2xl" title="Web3" />
              <SiJest className="text-blue-700 text-2xl" title="Jest" />
            </div>
          </a>
        </div>
        <div className="project bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center">
          <a href='https://github.com/joyy-frontend/recipe-book'>
            <img
              src={cookit} 
              alt="no image2"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookit (Recipe Book)</h3>
            <p className="text-sm text-gray-600">
              {/* This is a description of Project 2. Add a short overview of the project here. */}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <FaReact className="text-blue-500 text-2xl" title="React" />
              <IoLogoCss3 className="text-blue-500 text-2xl" title="CSS" />
              <BsBootstrapFill className="text-blue-500 text-2xl" title="Bootstrap" />
            </div>
          </a>
        </div>
        <div className="project bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center">
          <a href='https://github.com/joyy-frontend/expense-tracker'>
            <img
              src={expenseTracker} 
              alt="no image3"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Expense Tracker</h3>
            <p className="text-sm text-gray-600">
              {/* This is a description of Project 3. Add a short overview of the project here. */}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <IoLogoHtml5 className="text-blue-500 text-2xl" title="HTML" />
              <IoLogoCss3 className="text-blue-500 text-2xl" title="CSS" />
              <IoLogoJavascript className="text-blue-500 text-2xl" title="JS" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
