import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = (setCart, cart) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {

    getDoc(doc(firestoreDb, "products", productId))
      .then((response) => {
        console.log(response);
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .finally(() => setLoading(false));
    console.log(product);
    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <Spinner />
      ) : product ? (
        <ItemDetail {...product} setCart={setCart} cart={cart} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
