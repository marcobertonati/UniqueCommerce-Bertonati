//Importamos APP
import "./App.css";

//Importamos React Router Dom para routear
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import CheckoutContainer from "./Container/CheckoutContainer";
import Cart from "./components/Cart/Cart";
import Footer from './components/Footer/Footer'

//Contextos
import CartContextProvider from "./Context/CartContext";

//Componetes Testing: quizás sea esto molesto, pero me ayuda mucho para ir probando con clase en vivo.
// import TestContainer from "./Container/EventReactContainer";
// import AddEventListenerContainers from "./Container/AddEventListenerContainers";
// import CustomInputContainer from "./Container/CustomInputContainer";

function App() {
  return (

    <CartContextProvider>
      <BrowserRouter>
        {/* El NavBar va a estar en todas las rutas */}
        <NavBar/>
        
        <Switch>
          {/* Ruta de home */}
          <Route exact path="/">
            <HeaderContainer />
            <ItemListContainer />
          </Route>

          {/* Ruta de solo lista de items */}
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          {/* Ruta de item en particular */}
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>

          {/* Ruta de carrito */}
          <Route path="/cart">
            <Cart />
          </Route>

           {/* Ruta de carrito */}
           <Route path="/checkout">
            <CheckoutContainer />
          </Route>

          {/* Ruta si no estás logueado */}
          <Route path="/not-logged">
            <HeaderContainer />
          </Route>

          {/* Ruta de testing */}
          {/* <Route path="/testRoute">
          <AppContext.Provider value={["pantalon", "pantuflas"]}>
            <AddEventListenerContainers />
          </AppContext.Provider>
          <TestContainer />
          <AddEventListenerContainers />
          <CustomInputContainer placeholder ="hola" /> 
        </Route> */}
        </Switch>
      
      <Footer />
      </BrowserRouter>
    </CartContextProvider>
    
  );
}
export default App;
