import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { useState } from 'react';

function App() {

  return (
    <div>
    
    <Navbar/>
    <ItemCount stock={7} />
    <Footer/>
    </div>
  )
}

export default App;
