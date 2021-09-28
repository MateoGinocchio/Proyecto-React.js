import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Sobre Nosotros</a>
                    <ul>
                        <li>
                            <a href="">Holaa</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">Ojotas</a>
                </li>
                <li>
                    <a href="">Clientes</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
