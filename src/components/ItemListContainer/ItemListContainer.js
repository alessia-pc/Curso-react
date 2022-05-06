import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {
  getDocs,
  collection,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoriaId
      ? query(
          collection(firestoreDb, "products"),
          where("categoria", "==", categoriaId)
        )
      : query(
          collection(firestoreDb, "products"),
          orderBy("categoria", "asc"),
          limit(9)
        );


    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : products ? (
        <ItemList products={products} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
