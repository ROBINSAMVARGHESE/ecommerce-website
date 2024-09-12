import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Make sure to create or update this CSS file for styling
import { TbPhoneFilled } from "react-icons/tb";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! We will get back to you shortly.');
    // Here you would normally handle the form submission, e.g., send data to an API or email service
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">We’re here to assist you. Reach out to us through the form below or use our contact details.</p>
      </header>

      <section className="contact-info">
        <h2 className="section-title">Contact Information</h2>
        <div className="contact-details">
          <ul className="contact-list">
            <li><strong>Address:</strong> Cheryly Hill Park, Seaport - Airport Rd, Kakkanad, Kochi, Kerala 12345</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> <a href="mailto:info@orealcollection.com">info@orealcollection.com</a></li>
            <li><strong>Business Hours:</strong> Mon-Fri, 10:00 AM - 9:00 PM</li>
            <li><strong>Customer Support:</strong> <a href="tel:+1234567890"> <TbPhoneFilled />  +123 456 7890</a></li>
          </ul>
          <div className="map-container">
            <h3>Find Us</h3>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.771401143104!2d76.33123661420754!3d10.0348496922389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f5ebf22c715%3A0x21b6d6e5e9eb5d8!2s123%20Or%C4%93al%20Street%2C%20Fashion%20City%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1633294483224!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2 className="section-title">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="name.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="email@example.com.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      <section className="social-media">
        <h2 className="section-title">Follow Us</h2>
        <ul className="social-media-list">
          <li>
            <a href="https://facebook.com/orealcollection" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/orealcollection" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com/orealcollection" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/company/orealcollection" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
