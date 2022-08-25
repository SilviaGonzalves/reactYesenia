

import CartWidget from '../cartwidget/CartWidget';
import './NavBar.css';

const NavBar = () => {

    return (

            <header className="container-fluid">
                <img src="/assets/imagenes/logoyesenia.png" id="imagen-logo" alt="logo" />
          
                <nav >
                    <a href="#top">Cremosos</a>
                    <a href="#top">Espejos</a>
                    <a href="#top">Accesorios</a>
                </nav>
              
                <CartWidget/>
        
            </header>

    )
}
export default NavBar