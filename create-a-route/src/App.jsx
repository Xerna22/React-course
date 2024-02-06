import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <div> 
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
