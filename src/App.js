import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Producto from './Producto';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <hr></hr>
    <ItemListContainer/>
    <hr/>
    <h2>DESTACADO</h2> 
    <hr></hr>
    <Producto artículo="Remera Básica" sexo=" Hombre" precio="$1500"/>
    <hr/>
    <Producto artículo="Remera Básica" sexo=" Mujer" precio="$1500"/>
    </>
  );
}

export default App;
