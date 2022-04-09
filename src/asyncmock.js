const products = [
  {
    id: "producto1",
    nombre:
      "Auriculares Beats Studio3 Wireless – Beats Skyline Collection - Gris profundo",
    precio: "$50.000",
    categoria: "auriculares",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXJ92?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420175341",
    stock: 10,
    descripcion:
      "Los auriculares Beats Studio3 Wireless ofrecen un sonido extraordinario gracias a la tecnología Pure ANC (cancelación de ruido activa), que bloquea el ruido exterior de forma activa, y a la calibración de audio en tiempo real, que mantiene la nitidez, el rango y la expresividad de tu música. Detectan continuamente los sonidos exteriores que hay que bloquear y optimizan automáticamente el ajuste en tiempo real para que la música de tus artistas preferidos suene tal y como la concibieron.",
  },
  {
    id: "producto2",
    nombre: "Auriculares Beats Solo3 Wireless - Oro rosa",
    precio: "$32.000",
    categoria: "auriculares",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX442?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1570119324104",
    stock: 12,
    descripcion:
      "Con una batería de hasta 40 horas de duración, los Beats Solo3 Wireless son los auriculares ideales para tu día a día. Gracias a Fast Fuel puedes usarlos 3 horas con una carga de solo 5 minutos. Disfruta del sonido que solo Beats puede ofrecerte y súmale la libertad de movimiento que te da la tecnología inalámbrica Bluetooth de clase 1. Además puedes ajustar a tu gusto sus cascos acolchados abiertos, así nunca te cansarás de llevarlos.",
  },
  {
    id: "producto3",
    nombre: "Beats Solo3 Wireless - Mickey's 90th Anniversary Edition",
    precio: "$30.000",
    categoria: "auriculares",
    img: "https://m.media-amazon.com/images/I/714og8zjjDL._AC_SL1500_.jpg",
    stock: 5,
    descripcion:
      "Conéctate con tu dispositivo a través de Bluetooth Clase 1 para escuchar sin cables. Beats te trae el sonido y el diseño galardonados que te gustan.Hasta 40 horas de duración de la batería para uso durante varios días.Con combustible rápido, 5 minutos de carga le da 3 horas de reproducción cuando la batería es bajaAjuste ajustable con almohadillas acolchadas para el uso diario.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id));
    }, 1000);
  });
};
