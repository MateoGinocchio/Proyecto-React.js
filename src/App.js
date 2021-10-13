import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';
import Pokemon from './components/Pokemon/Pokemon';

function App() {

  return (
    <div>
    
    <Pokemon/>
    <ItemCount stock={7} />
    <Footer/>
    </div>
  )
}

export default App;
