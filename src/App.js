import "./App.css";
// Importamos React Router Dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from './Container/ItemDetailContainer'
import TestContainer from './Container/EventReactContainer'
import AddEventListenerContainers from './Container/AddEventListenerContainers'
import CustomInputContainer from './Container/CustomInputContainer'



function App() {
  return (
    <BrowserRouter>
      {/* El NavBar va a estar en todas las rutas */}
      <NavBar />

      <Switch>
        {/* Ruta de home */}
        <Route exact path="/">
          <HeaderContainer />
          <ItemListContainer />

        {/* Componentes de prueba */}
          {/* <TestContainer />
          <AddEventListenerContainers />
          <CustomInputContainer placeholder ="hola" />  */}

        </Route>

        {/* Ruta de solo lista de items */}
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>

        {/* Ruta de item en particular */}
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>

        {/* Ruta si no estás logueado */}
        <Route path="/not-logged">
          <HeaderContainer />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
export default App;
