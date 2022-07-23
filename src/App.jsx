import "./index.css";
import Login from "./Components/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Notes from "./Pages/Notes";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
