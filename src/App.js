import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Form />
        <Home />
      </div>
    </>
    
  );
}

export default App;
