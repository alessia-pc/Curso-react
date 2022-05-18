import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/firebase/firestore";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useAsync(
    setLoading,
    () => getProducts(categoriaId),
    setProducts,
    () => console.log("Ocurrió un error en ItemListContainer"),
    [categoriaId]
  );

  return (
    <div>
      <div>
        {loading ? (
          <>
            <Spinner />
          </>
        ) : products ? (
          <ItemList products={products} />
        ) : (
          <>
            <h1>El producto no existe en la base de datos</h1>
            <button>
              <Link className="texto-noHayProductos" to={"/productos"}>
                Volver a la lista de productos
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
