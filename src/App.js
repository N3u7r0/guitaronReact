import { Route, Routes } from "react-router-dom";
import NavBar from "./componentes/navBar/NavBar"
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
import Home from "./componentes/Home/Home";
import Nosotros from "./componentes/Nosotros/Nosotros"
import Detail from "./containers/Detail/Detail"
import Footer from "./componentes/Footer/Footer"
function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path='/' element={<Home/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/:tipo' element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<Detail />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
