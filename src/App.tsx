import "./css/App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ResumeSection from "./components/ResumeSection";
import Pong from "./components/Pong";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Spongebobify from "./components/Spongebobify";

function App() {
  return (
    <div className="App" style={{ minHeight: window.innerHeight }}>
      <Header />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/pong" element={<Pong />} />
          <Route path="/spongebobify" element={<Spongebobify />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
