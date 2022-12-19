import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Award from './pages/Award';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { socialMedia } from "./db/data";
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/awards" element={<Award/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer socialMedia={socialMedia}/>
      </Router>
    </>
  );
}

export default App;

