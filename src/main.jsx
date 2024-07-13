import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PremiumSec from "/Components/PremiumSec.jsx";
import Elementor from "/Components/Elementor.jsx";
import Covering from "/Components/Covering.jsx";
import AuthLayout from './component/AuthLayout.jsx';
import Faq from '../Components/Faq.jsx';


const Routers = ()=>{

  return (
    <Router>
    <Routes>
      <Route path="/" element={ <AuthLayout body={<App />} /> }/>
      <Route path="/about" element={<AuthLayout body={<Faq mainPage={true}/>}/>}/>
      <Route path="/blog" element={<AuthLayout body={<PremiumSec mainPage={true}/>}/>} />
      <Route path="/services" element={<AuthLayout body={<Elementor mainPage={true}/>}/>} />
      <Route path="/subjects" element={<AuthLayout body={<Covering mainPage={true}/>}/>} />
    </Routes>
  </Router>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>
)
