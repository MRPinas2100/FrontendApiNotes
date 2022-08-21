import "./index.css";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Notes from "./Pages/Notes";
import NewNote from "./Pages/NewNote";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<NewNote />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;