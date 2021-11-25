import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul className="Footer__contact-info">
        <li>
          <a
            href="https://www.linkedin.com/in/ConnorMooneyhan"
            target="_blank"
            rel="noreferrer"
            data-tooltip="LinkedIn"
            >
            <FontAwesomeIcon 
              icon={faLinkedin}
              />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ConnorMooneyhan"
            target="_blank"
            rel="noreferrer"
            data-tooltip="GitHub" 
            >
            <FontAwesomeIcon 
              icon={faGithub} 
              />
          </a>
        </li>
        <li>
          <a 
            href="mailto:connmoo@gmail.com"
            data-tooltip="connmoo@gmail.com"
            >
            <FontAwesomeIcon 
              icon={faEnvelope}  
              />
          </a>
        </li>
      </ul>
      <p>Website <a href="https://github.com/ConnorMooneyhan/ConnorMooneyhan.github.io" target="_blank" rel="noreferrer">source code</a>: <a href="https://github.com/ConnorMooneyhan/ConnorMooneyhan.github.io" target="_blank" rel="noreferrer">https://github.com/ConnorMooneyhan/ConnorMooneyhan.github.io</a></p>
    </footer>
  );
}

export default Footer;