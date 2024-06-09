import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4 className="judulfooter">Developed by Krisna Luciano Siburian</h4>
      {/* <h4>Copyright &copy; 2024 </h4> */}
      <div className="footerLinks">
        <a
          href="https://github.com/Krisnaaassss"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="iconFooter" />
        </a>
        <a
          href="https://www.linkedin.com/in/krisnalucianosiburian/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="iconFooter" />
        </a>
        <a
          href="mailto:krisnalucianosiburian29@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail className="iconFooter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
