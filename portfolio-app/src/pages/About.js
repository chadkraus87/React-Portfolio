import React from "react";
import profileImage from "../assets/images/Chadwick-Kraus-headshot.jpg";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src={profileImage}
              alt="About"
              className="img-fluid rounded-circle mb-4"
            />
          </div>
          <div className="col-md-6">
            <p>
              Hi! My name is Chad Kraus, a Full-Stack Developer, Network
              Engineer, and Software Engineer with a diverse background in IT
              Support, System Administration, and Digital Marketing. 
              <br></br>
              <br></br>
              Having a
              strong foundation in Full-Stack Development, I bring a versatile
              skill set to the table. As a Software Engineer, I've delved into
              the intricacies of coding and debugging, allowing me to
              effectively identify and resolve user interface issues. With a
              keen eye for detail, I ensure seamless functionality in both
              mobile and web-based software. 
              <br></br>
              <br></br>
              Drawing from my experience as a
              Network Engineer and System Administrator, I possess an adept
              understanding of network dynamics and various systems. Through
              meticulous troubleshooting and quick assistance, I've tackled
              complex technical challenges, implementing innovative IT solutions
              that enhance productivity while minimizing downtime. My capacity
              to convey intricate technical concepts to non-technical
              individuals has garnered praise from colleagues and clients alike.
              <br></br>
              <br></br>
              In the realm of front-end web development, I have honed my skills
              in HTML, CSS, and JavaScript to create visually appealing,
              user-friendly, and interactive websites. I have an innovative eye
              for design and a solid understanding of responsive web design
              principles, allowing me to develop websites that provide a
              seamless browsing experience across multiple devices. 
              <br></br>
              <br></br>
              I've also
              contributed my talents to Quality Assurance at Rockbot, where
              meticulous testing and attention to detail ensure the delivery of
              top-notch software. My IT Support background has allowed me to
              comprehend user needs deeply, leading to effective problem-solving
              and streamlined processes. 
              <br></br>
              <br></br>
              I channel my passion for health and
              fitness in my spare time by running my own Personal Training and
              Nutrition Coaching business, Kraus Fit. With a focus on promoting
              holistic well-being, I help clients achieve their fitness goals
              through personalized training programs and nutritional guidance.
              This experience has sharpened my interpersonal skills, time
              management abilities, and business acumen. 
              <br></br>
              <br></br>
              When I'm not working or
              helping clients, you can often find me hiking with my dogs or
              exploring the mountains of Colorado- my favorite place to hike.
              Spending time in nature not only provides me with a sense of
              tranquility but also fuels my creativity. Additionally, I enjoy
              building web applications as a way to continuously enhance my
              technical skills and contribute to the ever-evolving digital
              landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;