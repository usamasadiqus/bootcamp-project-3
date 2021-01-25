import {
  Navbar,
  Home,
  About,
  MenShoes,
  MenShoesDetails,
  WomenShoes,
  WomenShoesDetails,
  ContactUs,
  Footer,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// navbar ko mobile view me hamburger lagana hai