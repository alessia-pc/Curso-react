import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalCost, limpiarCart, getQuantity } = useContext(CartContext);

  if (getQuantity() === 0) {
    return (
      <div>
        <h2>El carrito se encuentra vacío</h2>

        <button className="link-noHayProductos">
          <Link to={"/productos"} className='texto-noHayProductos' >Conocé nuestros productos</Link>
        </button>
      </div>
    );
  }
  console.log(totalCost());
  return (
    <div>
      <h3>Estos son los productos que se encuentran en tu carrito:</h3>
      {cart.map((prod) => (
        <ItemCart key={prod.id} {...prod} />
      ))}
      <span> El total es: $ {totalCost()} </span>
      <div className="botonesCart">
        <button className="btn-clearCart" onClick={() => limpiarCart()}>
          Vaciar carrito
        </button>
        <button className="btn-comprar">Realizar compra</button>{" "}
        {/* aun no está en uso */}
      </div>
    </div>
  );
};

export default Cart;
