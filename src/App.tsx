import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/App.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App" style={{ height: window.innerHeight }}>
      <Header />
      <main>
        <AboutMe />
        <h2>Resume</h2>
        <p>
          You can download my{" "}
          <a href="./resources/resume-mooneyhan.pdf">resume</a> as a pdf here
        </p>
      </main>
      <footer className="Footer">
        <ul className="Footer__contact-info">
          <li>
            <a
              href="https://www.linkedin.com/in/ConnorMooneyhan"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ConnorMooneyhan"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="mailto:connmoo@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
