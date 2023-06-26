import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="footer">
      <div className="container">
        <p className="copywrite">© {currentYear} JobTik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
