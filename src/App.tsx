import "./css/App.css";

import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import Pong from './components/Pong/Pong.js';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{minHeight: window.innerHeight - 30}} >
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<h2>This is the home page.</h2>} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/pong" element={<Pong />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
