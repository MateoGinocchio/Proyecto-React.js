import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import LogoOjota from "../../img/LogoOjotas.png"

const Navbar = () => {
    return (
        <div className="containerNav">
            <img src={LogoOjota} width="130px" height="130px" alt="" />
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Ojotas</a>
                        <ul>
                            <li>
                                <a href="#">Casamientos</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Clientes</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>

        <CartWidget/>

        </div>
    )
}

export default Navbar
