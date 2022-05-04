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
  const [nombreYapellido, setNombreYapellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState(null);
  const { cart, totalCost } = useContext(CartContext);
  const [comprador, setComprador] = useState("");

  const subirFormulario = (e) => {
    e.preventDefault();
  };

  const crearOrden = () => {
    setLoading(true);

     const objetoComprador = {
       nombre: nombreYapellido,
       correo: correo,
       direccion: direccion,
       telefono: telefono,
     };
     setComprador(objetoComprador);

    const objetoOrder = {
      items: cart.map((producto) => {
        return {
          id: producto.id,
          nombre: producto.nombre,
          quantity: producto.quantity,
          precio: producto.precio
        };
      }),
      comprador: objetoComprador,
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
                name="nombre"
                onChange={(e) => {
                  setNombreYapellido(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                placeholder="Email"
                type="text"
                name="correo"
                onChange={(e) => {
                  setCorreo(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                placeholder="Dirección de envío"
                type="text"
                name="direccion"
                onChange={(e) => {
                  setDireccion(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                placeholder="Teléfono"
                type="text"
                name="telefono"
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button
              onClick={(e) => {
                crearOrden();
              }}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
