import "./css/App.css";

import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
