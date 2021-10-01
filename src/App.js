import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
    
    <Navbar/>
    <ItemListContainer greeting="Bienvenidos a Ojotas Impresas"/>
    <Footer/>
    </div>
  )
}

export default App;
