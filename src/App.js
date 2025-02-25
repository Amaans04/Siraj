import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import About from "./Components/About/About";
import Work from "./Components/Work/Work.js";
import Edu from "./Components/Edu/Edu.js";
import Skills from "./Components/Skills/Skills.js";

function App() {
  return (
    <Router basename="Siraj">
      <Routes>
      <Route index element={<Main/>} />
        <Route path="/resume_AS" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Education" element={<Edu />} />
      </Routes>
    </Router>
  );
}

export default App;
