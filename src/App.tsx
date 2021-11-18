import "./css/App.css";

import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import Pong from './components/Pong/Pong';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App" style={{minHeight: window.innerHeight}} >
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
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
