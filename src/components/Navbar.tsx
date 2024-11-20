import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" className="max-w-[200px] h-auto"/>
        </Link>

        <ul className="flex space-x-6">
          <li><Link to="/" className="text-gray-800 hover:text-blue-500 font-medium">Home</Link></li>
          <li><Link to="/about" className="text-gray-800 hover:text-blue-500 font-medium">About</Link></li>
          <li><Link to="/skills" className="text-gray-800 hover:text-blue-500 font-medium">Skills</Link></li>
          <li><Link to="/projects" className="text-gray-800 hover:text-blue-500 font-medium">Projects</Link></li>
          <li><Link to="/contact" className="text-gray-800 hover:text-blue-500 font-medium">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
