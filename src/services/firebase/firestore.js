import { firestoreDb } from "./index";
import {
  getDocs,
  collection,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { createAdapterProductoFromFirestore } from "../../adapters/productoAdapter";

export const getProducts = (categoriaId) => {
  return new Promise((resolve, reject) => {
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
          return createAdapterProductoFromFirestore(doc);
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
