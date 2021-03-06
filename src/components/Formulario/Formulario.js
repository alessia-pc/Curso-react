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
import { useFormik } from "formik";
import * as Yup from "yup";
import { muestraEnMiles } from "../../services/muestraEnMiles";

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
  const [ordenGenerada, setOrdenGenerada] = useState("");
  
  

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      confirmEmail: "",
      direccion: "",
    },

    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("Nombre y apellido requerido"),
      telefono: Yup.string().required("Telefono requerido"),
      email: Yup.string().email("Email inválido").required("Email requerido"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email"), null], "Los emails deben coincidir")
        .required("Confirmar Email requerido"),
      direccion: Yup.string().required("Dirección requerida"),
    }),

    onSubmit: (values) => {
      ordenConStock();
    },
  });

  const ordenConfirmada = () => {
    setComprador(objetoComprador);
    limpiarCart();
    setOrdenEstado("confirmado");
  };

  const crearOrden = async () => {
    setOrdenEstado("procesando");

    const { nombre, telefono, email, direccion } = formik.values;

    const objetoOrder = {
      items: cart.map((producto) => {
        return {
          id: producto.id,
          nombre: producto.nombre,
          quantity: producto.quantity,
          precio: producto.precio,
        };
      }),
      compradorUser: { nombre, telefono, email, direccion },
      total: totalCost(),
      estado: 'generada',
      date: new Date(),
    };
    const collectionRef = collection(firestoreDb, "orders");
    setOrdenId((await addDoc(collectionRef, objetoOrder)).id);
    ordenConfirmada(ordenId);
    setOrdenGenerada({ ...objetoOrder, ordenId });
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
  const ordenConStock = () => {
    crearOrden();
    prodAgotado();
  };

  if (cart.length === 0 && ordenEstado !== "confirmado") {
    return (
      <>
        <div>Debes tener productos en el carrito</div>
        <button>
          <Link className="texto-noHayProductos" to={"/productos"}>
            Volver a productos
          </Link>
        </button>
      </>
    );
  }

  if (ordenEstado === "confirmado" && ordenGenerada) {
    return (
      <>
        <div>
          <h1>Gracias por tu compra!</h1>
          <div className="orden">
            <div>
              <div>
                <h3 className="datosComprador">Datos del comprador:</h3>
  
                <table className="table table-bordered align-middle mt-4 mb-3 maxAncho container">
                  <tbody>
                    <tr>
                      <th>Id de orden</th>
                      <td className="text-muted fw-bold">{ordenId}</td>
                    </tr>
                    <tr>
                      <th>Fecha/Hora de Generada</th>
                      <td>{muestraEnMiles(ordenGenerada.date)}</td>
                    </tr>
                    <tr>
                      <th>Nombre completo</th>
                      <td>{ordenGenerada.compradorUser.nombre}</td>
                    </tr>
                    <tr>
                      <th>Teléfono</th>
                      <td>{ordenGenerada.compradorUser.telefono}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{ordenGenerada.compradorUser.email}</td>
                    </tr>
                    <tr>
                      <th>Dirección</th>
                      <td>{ordenGenerada.compradorUser.direccion}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="resumenCompra">Resumen de tu compra:</h3>

                <table
                  id="tablaOrden"
                  className="table table-bordered align-middle maxAncho container"
                >
                  <thead>
                    <tr>
                      <th className="text-center">Producto</th>
                      <th className="text-center">Cantidad</th>
                      <th className="text-center">Precio unitario</th>
                      <th className="text-center">Precio x cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordenGenerada.items.map((item) => (
                      <tr key={item.id} className="">
                        <td className="text-capitalize d-flex justify-content-between">
                          <div>
                            <div className="h5"> {item.nombre} </div>
                          </div>
                        </td>
                        <td className="py-auto text-center">
                          {item.quantity}{" "}
                        </td>
                        <td className="py-auto text-center">
                          ${muestraEnMiles(item.precio)}{" "}
                        </td>
                        <td className="py-auto text-center">
                          ${muestraEnMiles(item.precio * item.quantity)}{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-end" colSpan="1"></th>
                      <th className="text-center"></th>
                      <th className="text-end" colSpan="1">
                        Precio total:
                      </th>
                      <th className="text-center">
                        ${muestraEnMiles(ordenGenerada.total)}
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <button>
            <Link className="btn-volver-pagina-principal" to="/">
              Página Principal
            </Link>{" "}
          </button>
        </div>
      </>
    );
  } else if (ordenEstado === "procesando") {
    return (
      <>
        <div>
          <h1>Estamos procesando tu orden...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="formContainer container">
        <form onSubmit={formik.handleSubmit} className="formContainer__form">
          <h2>Ingresá tus datos!</h2>

          <div>
            <input
              type="text"
              name="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              className="form__input"
              placeholder="Escribí tu nombre completo"
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombre && formik.errors.nombre ? (
              <span className="error">{formik.errors.nombre}</span>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="telefono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              className="form__input"
              placeholder="Escribí tu telefono"
              onBlur={formik.handleBlur}
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <span className="error">{formik.errors.telefono}</span>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form__input"
              placeholder="Escribí tu email"
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="error">{formik.errors.email}</span>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="confirmEmail"
              value={formik.values.confirmEmail}
              onChange={formik.handleChange}
              className="form__input"
              placeholder="Confirmá tu email"
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
              <span className="error">{formik.errors.confirmEmail}</span>
            ) : null}
          </div>

          <div>
            <input
              type="text"
              name="direccion"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              className="form__input"
              placeholder="Escribí tu dirección"
              onBlur={formik.handleBlur}
            />
            {formik.touched.direccion && formik.errors.direccion ? (
              <span className="error">{formik.errors.direccion}</span>
            ) : null}
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2" disabled = {!(formik.isValid && formik.dirty)}>
              Finalizar orden
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
