import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary py-4 text-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>Chadwick Kraus</h4>
            <p>Full Stack Developer & Software Engineer</p>
          </div>
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/blog" className="nav-link">Blog</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/resume" className="nav-link">Resume</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
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
