import me from "../../resources/me.jpg";

const Header = () => {
  return (
    <header className="Header">
      <div className="img-container">
        <img src={me} alt="me" width="100" />
      </div>
      <h1>Connor Mooneyhan</h1>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;