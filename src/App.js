// import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyNavbar from './Navbar'; // Adjust the path if necessary
import Home from './Home'
import Footer from './Footer';

function App() {
  return (
    <div>
      <MyNavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
