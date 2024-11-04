import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/heder.tsx';
import Footer from './components/Footer/Footer.tsx';
import Home from './pages/Home.tsx'; 
import About from './pages/About.tsx'; 
import Contact from './pages/Contact.tsx'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
