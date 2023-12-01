import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Navigation from './Components/Pages/Navigation'
import ScrollTopArrow from './Components/Pages/ScrollTopArrow';
import Students from './Components/Pages/Students';
import Footer from './Components/Pages/Footer';
import About from './Components/Pages/About';
import Gallery from './Components/Pages/Gallery';
import Register from './Components/Pages/Register';
import Contact from './Components/Pages/Contact'
import Hamburger from './Components/Pages/Hamburger';
import Hamburgermenu from './Components/Pages/Hamburgermenu';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />;
      <Route path='scroll' element={<ScrollTopArrow />} />;
      <Route path='/navigation' element={<Navigation />} />;
      <Route path='/students' element={<Students />} />;
      <Route path='/footer' element={<Footer />} />;
      <Route path='/about' element={<About />} />;
      <Route path='/gallery' element={<Gallery />} />;
      <Route path='/register' element={<Register />} />;
      <Route path='/contact' element={<Contact />} />;
      <Route path='/hamburger' element={<Hamburger />} />;
      <Route path='/ham' element={<Hamburgermenu />} />;
    </Routes>
  );
}

export default App;
