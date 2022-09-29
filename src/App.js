import './App.css';
import  Navbar from "./components/Navbar"
import React from 'react';
import Header from "./components/HomePage"
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Footer from './components/Footer';
import Content3 from './components/Content3';

function App() {
  return (
    <div className="App ">
    <Navbar/> 
    <Header/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Footer/>
    </div>
  
    
  );
}

export default App;
