import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="contactMe">
        <h4>Contact Us</h4>
        <p className="emailStyle">Email: Avivturgeman10@gmail.com</p>
        <p className="phoneStyle">Phone: 054-7654-959</p>
      </div>
      <div className="socialMedia">
        <h4>Follow Us</h4>
        <div className="socialMediaContainer">
          <a href="https://github.com/avivt10" className="socialIcon">
            <FontAwesomeIcon icon={faGithub} size="5x" />
          </a>
          <a
            href="https://www.linkedin.com/in/aviv-turgeman-practical-software-engineer/"
            className="socialIcon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="5x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
