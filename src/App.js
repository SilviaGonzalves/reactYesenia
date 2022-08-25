import './App.css';
import NavBar from "./Components/navbar/NavBar.jsx";
import Contenido from "./Components/contenido/Contenido.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer.jsx';


const App = () => {

  return (
    <div >

      <NavBar/>
      
      <Contenido/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
