import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/App.css";
import me from "./resources/me.jpg";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App" style={{ height: window.innerHeight }}>
      <header className="Header">
        <img src={me} alt="me" width="100" />
        <h1 className="Header__h1">Connor Mooneyhan</h1>
      </header>
      <main>
        <h2>About Me</h2>
        <p>
          My passion lies in solving meaningful problems and communicating those
          solutions to others. This has manifested itself in various areas of
          interest over the years such as research mathematics, teaching, and
          now programming, but the core interest has stayed steady and my
          proficiency has grown through that process.
        </p>
        <p>
          I have a B.S. in Mathematics from Florida State University, and at
          present I am using the exceptional analytical skills I learned there
          to develop proficiency in programming, which at present entails mostly
          React, Node.js, and Rust. I am currently devoting many hours a day,
          after working my job as a departmental secretary, to honing these
          skills and shaping myself into a formidable candidate in the field of
          front-end web development.
        </p>
        <p>
          This new pursuit of mine has been incredibly rewarding and interesting
          thus far, and I am thrilled to continue absorbing new concepts and
          cultivating my skills as a web developer as I find my way to my first
          job in the field.
        </p>
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
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ConnorMooneyhan"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href="mailto:connmoo@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> connmoo@gmail.com
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
