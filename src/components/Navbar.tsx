import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-none">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="logo ml-12">
          <img src="/logo.png" alt="Logo" className="max-w-[200px] h-auto cursor-pointer"/>
        </Link>
        <ul className="flex space-x-12">
          <li><Link to="home" smooth={true} duration={500} className="text-gray-800 hover:text-blue-500 font-black text-lg md:text-xl no-underline">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="text-gray-800 hover:text-blue-500 font-black text-lg md:text-xl no-underline">About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="text-gray-800 hover:text-blue-500 font-black text-lg md:text-xl no-underline">Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="text-gray-800 hover:text-blue-500 font-black md:text-xl no-underline">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="text-gray-800 hover:text-blue-500 font-black md:text-xl no-underline">Contact</Link></li>
          {/* text-gray-800 hover:text-blue-500 font-medium no-underline */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
