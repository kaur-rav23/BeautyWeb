import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <h2>Go&Glow</h2>
      <p>
      Go and Glow – Your one-stop destination for radiant beauty and premium cosmetic essentials.
      </p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
