import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = (setCart, cart) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFound, setIsFound] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(firestoreDb, "products", productId))
      .then((response) => {
        setIsFound(response.data());
        const productos = { id: response.id, ...response.data() };
        setProduct(productos);
      })
      .finally(() => setLoading(false));
    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <Spinner />
      ) : isFound ? (
        <ItemDetail {...product} setCart={setCart} cart={cart} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
