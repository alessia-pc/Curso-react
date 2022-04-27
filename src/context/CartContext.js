import { createContext, useState } from "react";

const CartContext = createContext();

//envolver componentes
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    //setCart([...cart, productToAdd]);
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const newProducts = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const newProduct = {
            ...prod,
            quantity: prod.quantity + productToAdd.quantity,
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

  const clearCart = () => {
    //sin uso todavía, luego implementar un boton 'limpiar carrito' con esta función
    setCart([]);
  };

  const removeItem = (id) => {
    //sin uso todavía, luego implementar un boton 'basura' con esta función
    const productos = cart.filter((prod) => prod.id !== id);
    setCart(productos);
  };

/*   const getQuantityProduct = (id) => {
    return cart.find((prod) => prod.id === id)?.quantity;
  }; */

  const totalCost = () => {
    const totalCost = Object.values(cart).reduce(
      (acc, { quantity, precio}) => acc + quantity * precio,
      0
    );
    return totalCost;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getQuantity,
        isInCart,
        clearCart,
        removeItem,
        //getQuantityProduct,
        totalCost
      }}
    >
      {/* es envuelto aca */}
      {children} {/* todo cae aca  */}
    </CartContext.Provider>
  );
};
export default CartContext;
