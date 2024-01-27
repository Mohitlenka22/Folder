import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import { Route, Router, Routes } from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
   <>
    {/* <h1>Hello world</h1> */}
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    </Routes>
  </>
  );
}

export default App;
