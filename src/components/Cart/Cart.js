import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  query,
  where,
  getDocs,
  writeBatch,
  collection,
  documentId,
  doc,
  addDoc,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";

const Cart = () => {
  const [loading, setLoading] = useState(false);

  const { cart, totalCost, limpiarCart, getQuantity } = useContext(CartContext);

  const crearOrden = () => {
    setLoading(true);

    const objetoOrder = {
      items: cart,
      comprador: {
        nombre: "Alessia Puga Cammuso",
        celular: "123456789",
        email: "pugaalessia@gmail.com",
      },
      totalDeCompra: totalCost(),
      date: new Date(),
    };

    const ids = cart.map((producto) => producto.id);

    const batch = writeBatch(firestoreDb);

    const collectionRef = collection(firestoreDb, "products");

    const noHayStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((respuesta) => {
        respuesta.docs.forEach((documento) => {
          const dataDoc = documento.data();

          const productoCantidad = cart.find(
            (producto) => producto.id === documento.id
          )?.quantity;

          if (dataDoc.stock >= productoCantidad) {
            batch.update(documento.ref, {
              stock: dataDoc.stock - productoCantidad,
            });
          } else {
            noHayStock.push({ id: documento.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (noHayStock.length === 0) {
          const collectionRef = collection(firestoreDb, "orders");
          return addDoc(collectionRef, objetoOrder);
        } else {
          return Promise.reject({
            name: "noHayStock",
            products: noHayStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        console.log(`El id de la orden es ${id}`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h2>Se está generando su orden</h2>;
  }

  if (getQuantity() === 0) {
    return (
      <div>
        <h2>El carrito se encuentra vacío</h2>

        <button className="link-noHayProductos">
          <Link to={"/productos"} className="texto-noHayProductos">
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
      <span> El total es: $ {totalCost()} </span>
      <div className="botonesCart">
        <button className="btn-clearCart" onClick={() => limpiarCart()}>
          Vaciar carrito
        </button>
        <button className="btn-comprar">Realizar compra</button>
        {/* aun no está en uso */}
        <button onClick={() => crearOrden()}>Generar orden de compra</button>
      </div>
    </div>
  );
};

export default Cart;
