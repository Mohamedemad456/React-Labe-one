import React from 'react';
import logo from './logo.svg';
import './bootstrap.min.css'; // Import the Bootstrap CSS file

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5"
      style={{ backgroundColor: '#F5511E' }} id="home">
      <div className="container-fluid">
        <a className="navbar-brand text-light h1 fs-1 mx-5 lead"
          href="Lab-13.html"><img src={logo}></img> Logo</a>
        <button className="navbar-toggler navbar-dark fs-3" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light active h5 fs-2 mx-5 lead"
                aria-current="page" href="Lab-13.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light h5 fs-2 mx-5 lead"
                href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light h5 fs-2 mx-5 lead" href="#">Contact
                Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-light dropdown-toggle mx-5 lead h5 fs-2"
                href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;