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

const Formulario = () => {
  const [campoFormulario, setCampoFormulario] = useState("");
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState(null);
  const { cart, totalCost } = useContext(CartContext);

  const subirFormulario = (e) => {
    e.preventDefault();
  };

  const cambiosFormulario = (evento) => {
    const name = evento.target.name;
    const value = evento.target.value;
    setCampoFormulario((values) => ({ ...values, [name]: value }));
  };

  const crearOrden = () => {
    setLoading(true);

    const objetoOrder = {
      productoDeOrden: cart.map((producto) => {
        return {
          id: producto.id,
          name: producto.name,
          quantity: producto.quantity,
          priceUni: producto.price,
        };
      }),
      comprador: campoFormulario,
      total: totalCost(),
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
        const ordenId = id;
        console.log(`El id de la orden es ${id}`);
        return setOrdenId(ordenId);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (ordenId) {
    return (
      <>
        <h3>El id de su orden es: {ordenId}</h3>
        <p>
          En los próximos 3 días nos contactarémos para coordinar la entrega
        </p>
      </>
    );
  }

  if (loading) {
    return <h2>Se está generando su orden</h2>;
  }

  return (
    <form onSubmit={subirFormulario}>
      <h1 className="Title">Formulario</h1>
      <div className="Form">
        <div className="Field">
          <div className="Inputs">
            <label>
              <input
                placeholder="Nombre y apellido"
                type="text"
                onChange={cambiosFormulario}
                name="nombre"
                value={campoFormulario.nombre}
              />
            </label>
            <label>
              <input
                placeholder="Email"
                type="text"
                onChange={cambiosFormulario}
                name="correo"
                value={campoFormulario.correo}
              />
            </label>
            <label>
              <input
                placeholder="Dirección de envío"
                type="text"
                onChange={cambiosFormulario}
                name="direccion"
                value={campoFormulario.direccion}
              />
            </label>
            <label>
              <input
                placeholder="Teléfono"
                type="text"
                onChange={cambiosFormulario}
                name="telefono"
                value={campoFormulario.telefono}
              />
            </label>
          </div>
          <div>
            <button onClick={() => crearOrden()}>Finalizar compra</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
