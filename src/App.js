import { Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar"
import Home from "./componentes/Home/Home";
import Nosotros from "./componentes/Nosotros/Nosotros"
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import Footer from "./componentes/Footer/Footer"
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./containers/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/:tipo' element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Ruta no encontrada T_T</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
