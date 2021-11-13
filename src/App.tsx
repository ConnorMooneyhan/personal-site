import "./css/App.css";

import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ minHeight: window.innerHeight }}>
      <Header />
      <main>
        <AboutMe />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
