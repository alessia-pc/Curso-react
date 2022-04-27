import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalCost, clearCart, getQuantity } = useContext(CartContext);

  if (getQuantity() === 0) {
    return (
      <div>
        <h2>El carrito se encuentra vacío</h2>
        <Link to={"/productos"}>Conocé nuestros productos</Link>
      </div>
    );
  }
  console.log(totalCost());
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((prod) => (
        <ItemCart key={prod.id} {...prod} />
      ))}
      <span> El total es: $ {totalCost()} </span>
      <button onClick={() => clearCart()}>Vaciar carrito</button>
      <button>Realizar compra</button> {/* aun no está en uso */}
    </div>
  );
};

export default Cart;
