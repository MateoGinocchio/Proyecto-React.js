import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
        <div className="containerFooter">
            <div className="sectionsFooter">
                <a className="aFooter" href="">Home</a>
                <a className="aFooter" href="">Sobre Nosotros</a>
                <a className="aFooter" href="">Ojotas</a>
                <a className="aFooter" href="">Clientes</a>
                <a className="aFooter" href="">Contacto</a>
            </div>

            <div>
                {/* MAPA */}
            </div>

            <div className="redes">
                <p>Instagram</p>
                <p>Facebook</p>
                <p>ginocchiomateo@gmail.com</p>
                <p>+54 9 11 5014-9585</p>
            </div>
        </div>
        </>
    )
}

export default Footer
