import React from "react";
import profileImage from "../assets/images/Chadwick-Kraus-headshot.jpg";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <img src={profileImage} alt="Profile" className="img-fluid rounded-circle mb-4" />
          </div>
          <div className="col-md-6">
            <p>
              {/* Add bio */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
