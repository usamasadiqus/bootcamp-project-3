import { Navbar, Home, About, MenShoes, WomenShoes } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menshoes" element={<MenShoes />} />
        <Route path="/womenshoes" element={<WomenShoes />} />
      </Routes>
    </Router>
  );
}

export default App;
