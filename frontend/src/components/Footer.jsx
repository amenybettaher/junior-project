import React from 'react';
import '../footer.css'; // Make sure to import your CSS file
import img from '../logo/oh ya.png'
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src ={img}/>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">OH Ya © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>25 A.avenue lahbib bourgiba</span> Nebeul Tunis</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+216 98.462.247</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@Oh_Ya.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
