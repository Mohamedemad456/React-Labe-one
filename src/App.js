// import logo from './logo.svg';
import "./App.css";
import React from "react";
import MyNavbar from "./Component/Navbar"; // Adjust the path if necessary
import IncDecReset from "./Component/IncDecReset";
import DetailsComponent from "./Component/DetailsComponent";
import Counter from "./Component/Counter";
import { Container } from "react-bootstrap";
// import Home from './Home'
// import Footer from './Footer';

function App() {
  return (
    <div>
      <MyNavbar />
      <IncDecReset />
      <DetailsComponent />
      <Counter />
    </div>
  );
}

export default App;
