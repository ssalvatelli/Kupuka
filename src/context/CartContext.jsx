import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, quantity) {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prev) => {
          if (prev.id === item.id) {
            return {
              ...prev,
              quantity,
            };
          } else {
            return prev;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clear() {
    setCart([]);
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
