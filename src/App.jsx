import "./App.css";
import Cart from "./components/pages/cart/Cart";
import CartProvider from "./context/CartContext";
import Navbar from "./components/layouts/navbar/Navbar";
import Checkout from "./components/pages/checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
