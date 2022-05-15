export const createAdapterProductoFromFirestore = (doc) => {
    const data = doc.data();

    const formattedProducto = {
        id: doc.id,
        nombre: data.nombre,
        categoria: data.categoria,
        img: data.img,
        precio: data.precio,
        descripcion: data.descripcion
    }
    return formattedProducto
}