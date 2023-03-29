import React, { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Services from './Pages/Services';
import Technology from './Pages/Technology';
import Work from './Pages/Work';
import Career from './Pages/Career';
import Hire from './Pages/Hire';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import HireDedicated from './Pages/HireDedicated';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/our-work' element={<Work />} />
        <Route path='/career' element={<Career />} />
        <Route path='/hire-developers' element={<Hire />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/hire-dedicated-developer' element={<HireDedicated />} />   
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
