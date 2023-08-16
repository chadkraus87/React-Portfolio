import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-4 text-black">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-black">About <i class="fa-solid fa-person nav-icon"></i></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/portfolio" className="nav-link text-black">Portfolio <i class="fa-solid fa-folder nav-icon"></i></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/resume" className="nav-link text-black">Resume <i class="fa-solid fa-file nav-icon"></i></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link text-black">Contact <i class="fa-solid fa-file-signature nav-icon"></i></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
