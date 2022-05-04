import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import "./Cart.css";
import { muestraEnMiles } from "../../services/muestraEnMiles";

const Cart = () => {
  const { cart, totalCost, limpiarCart, getQuantity } = useContext(CartContext);

  if (getQuantity() === 0) {
    return (
      <div>
        <h2>El carrito se encuentra vacío</h2>

        <button>
          <Link
            className="texto-noHayProductos"
             to={"/productos"}
          >
            Conocé nuestros productos
          </Link>
        </button>
      </div>
    );
  }
  console.log(totalCost());
  return (
    <div>
      <h3>Estos son los productos que se encuentran en tu carrito:</h3>
      {cart.map((producto) => (
        <ItemCart key={producto.id} {...producto} />
      ))}
      <span> El total es: $ {muestraEnMiles (totalCost())} </span>
      <div className="botonesCart">
        <button className="btn-clearCart" onClick={() => limpiarCart()}>
          Vaciar carrito
        </button>
        {/* aun no está en uso */}
      
        <button><Link  className="btn-comprar" to={"/formulario"}>Finalizar compra</Link></button>
    </div>
    </div>
  );
};

export default Cart;
