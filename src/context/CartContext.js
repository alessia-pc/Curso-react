import { createContext, useState } from "react";

const CartContext = createContext();

//envolver componentes
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const anadirItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const newProducts = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const newProduct = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return newProduct;
        } else {
          return prod;
        }
      });
      setCart(newProducts);
    }
  };

  const getQuantity = () => {
    let cuenta = 0;
    cart.forEach((prod) => {
      cuenta += prod.quantity;
    });
    return cuenta;
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const limpiarCart = () => {
    setCart([]);
  };

  const removerItem = (id) => {
    const productos = cart.filter((prod) => prod.id !== id);
    setCart(productos);
  };

  const getQuantityProducto = (id) => {
    return cart.find((prod) => prod.id === id)?.quantity;
  };


  const totalCost = () => {
    const totalCost = Object.values(cart).reduce(
      (accion, { quantity, precio}) => accion + quantity * precio,
      0
    );
    return totalCost;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        anadirItem,
        getQuantity,
        isInCart,
        limpiarCart,
        removerItem,
        getQuantityProducto,
        totalCost
      }}
    >
      
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
