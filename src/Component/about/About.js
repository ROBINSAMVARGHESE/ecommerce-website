import React from 'react';
import './About.css'; // Ensure this CSS file is created and updated
import logo from '../Assets/Images/Orēal collection.jpg';
import johndoe from '../Assets/Images/john doe.jpeg'
import janesmith from '../Assets/Images/jane smith.jpeg'
import EmilyJohnson from '../Assets/Images/Emily Johnson.jpeg'
function About() {
  return (
    <div className="about-container">
      <header className="about-header text-center">
        <h1>About Us</h1>
        <p>About our company, mission, and team.</p>
      </header>

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Our Story</h2>
              <p>
                Welcome to our store! Our company was founded on the principle of providing high-quality products and exceptional service. Our story began with a simple idea and has grown into a successful venture with a commitment to excellence.
              </p>
              <p>
                We believe in customer satisfaction and strive to deliver products that meet and exceed expectations. Our team is passionate about what we do, and we are dedicated to making a positive impact through our work.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={logo} alt="Our Story" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission text-center">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to enhance the lives of our customers by offering innovative products and outstanding customer service. We aim to be the go-to destination for high-quality products that enrich your lifestyle.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="text-center">Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="team-member">
                <img src={johndoe} alt="Team Member 1" className="img-fluid rounded-circle" />
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img src={janesmith} alt="Team Member 2" className="img-fluid rounded-circle" />
                <h3>Jane Smith</h3>
                <p>Chief Marketing Officer</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img src={EmilyJohnson} alt="Team Member 3" className="img-fluid rounded-circle" />
                <h3>Emily Johnson</h3>
                <p>Production Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
