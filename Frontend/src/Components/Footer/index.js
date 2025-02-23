import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-sm text-center">
        <div className="d-flex flex-column flex-md-row justify-content-center">
          <p className="m-5">
            Copyright &copy; {new Date().getFullYear()}, SEC. Designed & Developed by  
            <strong> Meenakshi Sundaram</strong>
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <a 
            href="https://github.com/Sanjith-Meenakshi-Sundaram" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginRight: "10px", textDecoration: "none", color: "blue" }}
          >
            GitHub
          </a>
          |
          <a 
            href="https://www.linkedin.com/in/meenakshi-sundaram-d/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginLeft: "10px", textDecoration: "none", color: "blue" }}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
