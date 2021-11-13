import "./css/App.css";

import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ minHeight: window.innerHeight }}>
      <Header />
      <main>
        <AboutMe />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
