

import CartWidget from '../cartwidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (

            <header className="container-fluid">
                <Link to="/">
                    <img src="/assets/imagenes/logoyesenia.png" id="imagen-logo" alt="logo" />
                </Link>

                <nav >
                   
                    <Link to="/productos/cremosos">Cremosos</Link>
                    <Link to="/productos/espejados">Espejos</Link>
                    <Link to="/productos/accesorios">Accesorios</Link>

                    <Link to="/nosotros">Nosotros</Link>
                    {/* <Link to="/contacto">Contacto</Link> */}

                </nav>
              
                <CartWidget/>
        
            </header>

    )
}
export default NavBar

