import "./Formulario.css";
import CartContext from "../../context/CartContext";
import { useContext, useState } from "react";
import {
  getDocs,
  writeBatch,
  query,
  where,
  collection,
  documentId,
  addDoc,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";
import { Link } from "react-router-dom";

const objetoComprador = {
  nombre: "",
  telefono: "",
  email: "",
  direccion: "",
};

const Formulario = () => {
  const { cart, limpiarCart, totalCost } = useContext(CartContext);
  const [comprador, setComprador] = useState(objetoComprador);
  const [ordenEstado, setOrdenEstado] = useState(null);
  const [ordenId, setOrdenId] = useState(null);

  const getForm = (e) => {
    const { name, value } = e.target;
    setComprador({ ...comprador, [name]: value });
  };

  const orderConfirmed = () => {
    setComprador(objetoComprador);
    limpiarCart();
    setOrdenEstado("confirmado");
  };

  const crearOrden = async () => {
    setOrdenEstado("procesando");

    const objetoOrder = {
      items: cart.map((producto) => {
        return {
          id: producto.id,
          nombre: producto.nombre,
          quantity: producto.quantity,
          precio: producto.precio,
        };
      }),
      compradorUser: comprador,
      total: totalCost(),
      date: new Date(),
    };
    const collectionRef = collection(firestoreDb, "orders");
    setOrdenId((await addDoc(collectionRef, objetoOrder)).id);
    orderConfirmed(ordenId);
  };

  const prodAgotado = () => {
    const ids = cart.map((p) => p.id);
    const batch = writeBatch(firestoreDb);
    const collectionRef = collection(firestoreDb, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find((p) => p.id === doc.id)?.quantity; 

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
            batch.commit();
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const orderAndStock = () => {
    crearOrden();
    prodAgotado();
  };

  if (ordenEstado === "confirmado") {
    return (
      <>
        <div>
          <h1>Gracias por tu compra!</h1>
          <p>Tu numero de orden es {ordenId} .</p>
          <button>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Pagina Principal
            </Link>{" "}
          </button>
        </div>
      </>
    );
  } else if (ordenEstado === "procesando") {
    return (
      <>
        <div>
          <h1>Estamos procesando tu orden.</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="formContainer">
        <form className="formContainer__form">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={comprador.nombre}
            onChange={getForm}
            className="form__input"
            placeholder="Escribí tu nombre"
          />
          <label>Telefono:</label>
          <input
            type="text"
            name="telefono"
            value={comprador.telefono}
            onChange={getForm}
            className="form__input"
            placeholder="Escribí tu telefono"
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={comprador.email}
            onChange={getForm}
            className="form__input"
            placeholder="Escribí tu email"
          />

          <label>Direccion:</label>
          <input
            type="text"
            name="direccion"
            value={comprador.direccion}
            onChange={getForm}
            className="form__input"
            placeholder="Escribí tu dirección"
          />

          <button onClick={() => orderAndStock()}> Ordenar </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
