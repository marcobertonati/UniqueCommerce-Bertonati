import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import ItemListContainer from "./Container/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        </Route>

        {/* Ruta de solo lista de items */}
        <Route exact path="/item-list">
          <ItemListContainer />
        </Route>

        {/* Ruta de item en particular */}
        <Route path="/item-list/:iditem">
          <ItemListContainer />
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
