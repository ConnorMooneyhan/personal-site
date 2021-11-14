import me from "../../resources/me.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="img-container">
        <img src={me} alt="me" width="100" />
      </div>
      <h1><Link to="/">Connor Mooneyhan</Link></h1>
      <nav>
        <ul>
          <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/pong">Pong</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;