import me from "../../resources/me.jpg";

const Header = () => {
  return (
    <header className="Header">
      <img src={me} alt="me" width="100" />
      <h1 className="Header__h1">Connor Mooneyhan</h1>
    </header>
  );
}

export default Header;