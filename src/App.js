// import logo from './logo.svg';
import "./App.css";
import React from "react";
import MyNavbar from "./Component/Navbar"; // Adjust the path if necessary
import IncDecReset from "./Component/IncDecReset";
import DetailsComponent from "./Component/DetailsComponent";
import Counter from "./Component/Counter";
import Users from "./Component/Users";
import Home from "./Component/Home";
import Footer from "./Component/Footer"
import GuessGame from "./Component/GuessGame"
// import Home from './Home'
// import Footer from './Footer';

function App() {
  return (
    <div>
      <MyNavbar />
      {/* <Home />
      <IncDecReset />
      <DetailsComponent />
      <Counter /> */}
      {/* <Users /> */}
      {/* <Footer /> */}
      <GuessGame />
    </div>
  );
}

export default App;
