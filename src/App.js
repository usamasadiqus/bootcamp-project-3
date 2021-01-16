import {
  Navbar,
  Home,
  About,
  MenShoes,
  MenShoesDetails,
  WomenShoes,
  WomenShoesDetails,
  ContactUs,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menshoes" element={<MenShoes />} />
        <Route path="/menshoes/:id" element={<MenShoesDetails />} />
        <Route path="/womenshoes" element={<WomenShoes />} />
        <Route path="/womenshoes/:id" element={<WomenShoesDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
