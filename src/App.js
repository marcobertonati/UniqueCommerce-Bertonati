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

//Importamos contexto
import CartContextProvider from "./Context/CartContext";

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
        </Switch>

      {/* El Footer va a estar en todas las rutas */}
      <Footer />

      </BrowserRouter>

    </CartContextProvider>
    
  );
}
export default App;
