import './App.css';
import Header from './Header';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <Header title="Master-Clone" />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />

        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
