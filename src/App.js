import React from 'react'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import Error from './Error';
import {
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/services" element={<ServicePage />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App;