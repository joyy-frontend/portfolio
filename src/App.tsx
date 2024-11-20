import React from 'react';
import Navbar from './components/Navbar';  
const App: React.FC = () => {
  return (
    <div>
      <Navbar />  
      <h1 className="mt-8 text-4xl font-bold text-gray-800">Welcome to the Homepage</h1>
    </div>
  );
}

export default App;
