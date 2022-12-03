import { useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (product) => {
    const inCart =
      cart &&
      cart != null &&
      cart.find((productInCart) => productInCart.id === product.id);

    if (!inCart) {
      setCart([...cart, product]);
    }
  };

  const deleteItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };

export default CartContext;
