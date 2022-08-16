import logo from '../logoyesenia.png';

const NavBar = () => {

    return (

            <header className="row header container-fluid">
                 <img src={logo} id="imagen-logo" alt="logo" />
          
                <nav className="classNav">
                    <a href="#top">Cremosos</a>
                    <a href="#top">Espejos</a>
                    <a href="#top">Accesorios</a>
                </nav>
            </header>

    )
}
export default NavBar