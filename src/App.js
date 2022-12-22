import NavBar from "./componentes/navBar/NavBar"
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"argentina do mundo"}/>
    </>
  );
}

export default App;
