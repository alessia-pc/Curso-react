import { useState, useEffect } from "react";
//import { getProducts } from "../../asyncmock";
//import { getProductsByCategoriaId } from "../../asyncmock";
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
    /*
    getProductsByCategoriaId(categoriaId)
      .then((prods) => {
        setProducts(prods);
        console.log(prods);
      })
      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      }); */

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

    /* : collection(firestoreDb, "products"); */

    getDocs(collectionRef)
      .then((response) => {
        console.log(response);
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .finally(() => setLoading(false));
    console.log(products);
  }, [categoriaId]);

  return (
    <div>
      {loading ? (
        <>
          <Spinner />
          <div>cargando...</div>
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
