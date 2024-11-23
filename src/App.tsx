import React from 'react';
import Navbar from './components/Navbar';  
import MainLayout from './layouts/MainLayout';
const App: React.FC = () => {
  return (
    <div>
      <Navbar />  
      <MainLayout />
    </div>
  );
}

export default App;
