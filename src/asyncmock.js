const products = [
  {
    id: "producto1",
    nombre: "Auriculares Beats Studio3 Wireless – Skyline Collection",
    precio: 50000,
    categoria: "auriculares",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXJ92?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420175341",
    stock: 10,
    descripcion:
      "Los auriculares Beats Studio3 Wireless ofrecen un sonido extraordinario gracias a la tecnología Pure ANC (cancelación de ruido activa), que bloquea el ruido exterior de forma activa, y a la calibración de audio en tiempo real, que mantiene la nitidez, el rango y la expresividad de tu música. Detectan continuamente los sonidos exteriores que hay que bloquear y optimizan automáticamente el ajuste en tiempo real para que la música de tus artistas preferidos suene tal y como la concibieron.",
  },
  {
    id: "producto2",
    nombre: "Auriculares Beats Solo3 Wireless - Oro rosa",
    precio: 32000,
    categoria: "auriculares",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX442?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1570119324104",
    stock: 12,
    descripcion:
      "Con una batería de hasta 40 horas de duración, los Beats Solo3 Wireless son los auriculares ideales para tu día a día. Gracias a Fast Fuel puedes usarlos 3 horas con una carga de solo 5 minutos. Disfruta del sonido que solo Beats puede ofrecerte y súmale la libertad de movimiento que te da la tecnología inalámbrica Bluetooth de clase 1. Además puedes ajustar a tu gusto sus cascos acolchados abiertos, así nunca te cansarás de llevarlos.",
  },
  {
    id: "producto3",
    nombre: "Beats Solo3 Wireless - Mickey's 90th Anniversary Edition",
    precio: 30000,
    categoria: "auriculares",
    img: "https://m.media-amazon.com/images/I/714og8zjjDL._AC_SL1500_.jpg",
    stock: 5,
    descripcion:
      "Conéctate con tu dispositivo a través de Bluetooth Clase 1 para escuchar sin cables. Beats te trae el sonido y el diseño galardonados que te gustan.Hasta 40 horas de duración de la batería para uso durante varios días.Con combustible rápido, 5 minutos de carga le da 3 horas de reproducción cuando la batería es bajaAjuste ajustable con almohadillas acolchadas para el uso diario.",
  },
  {
    id: "producto4",
    nombre: "JBL Boombox 2",
    precio: 15000,
    categoria: "parlantes-portatiles",
    img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw23a09c2b/JBL_BOOMBOX_2_HERO_020_x1.png?sw=537&sfrm=png",
    stock: 6,
    descripcion:
      'Sé el rey de la fiesta. Ya sea para una barbacoa en tu patio o para una acampada de fin de semana, Boombox 2 de JBL te da unos impresionantes graves con un atrevido diseño durante 24 increíbles horas de reproducción. El potente altavoz Bluetooth portátil y resistente al agua conforme a la norma IPX7, te da un arrollador sonido durante todo el día y toda la noche.", "Sé el rey de la fiesta. Ya sea para una barbacoa en tu patio o para una acampada de fin de semana, Boombox 2 de JBL te da unos impresionantes graves con un atrevido diseño durante 24 increíbles horas de reproducción. El potente altavoz portátil y resistente al agua conforme a la norma IPX7, te da un arrollador sonido durante todo el día y toda la noche. Además, te permite conectarle otros altavoces adicionales JBL PartyBoost compatibles para que tu fiesta sea épica. Con el Boombox 2 de JBL y su banco de baterías integrado que mantiene cargados tus dispositivos, tus amistades estarán bailando sin parar. ¡Diversión completa desde el atardecer hasta la mañana siguiente',
  },
  {
    id: "producto5",
    nombre: "JBL Go 3",
    precio: 8500,
    categoria: "parlantes-portatiles",
    img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw28e9eaf6/JBL_GO_3_HERO_BLUE_0077_1605x1605px.png?sw=537&sfrm=png",
    stock: 9,
    descripcion:
      "El JBL Go 3 presenta un estilo llamativo y un sonido JBL Pro pleno y sofisticado. Con su llamativo nuevo diseño vanguardista, tejidos coloridos y detalles expresivos, es el accesorio imprescindible para tu próxima salida. Vibrarás al son de tu música con el sonido JBL Pro. Resistente al polvo y al agua conforme a la norma IP67, para que puedas seguir disfrutando llueva o haga sol, y con su asa integrada para que puedas llevarlo a cualquier parte. El Go 3 viene en tonos y combinaciones de colores completamente nuevos inspirados en la actual moda urbana. El JBL Go 3 tiene una apariencia tan vívida como su calidad de sonido.",
  },
  {
    id: "producto6",
    nombre: "JBL Flip 6",
    precio: 23000,
    categoria: "parlantes-portatiles",
    img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6d9c1a12/1_JBL_FLIP6_HERO_RED_29399_x1.png?sw=537&sfrm=png",
    stock: 3,
    descripcion:
      "La banda sonora de tus aventuras El atrevido JBL Flip 6 ofrece el potente sonido JBL Original Pro con una claridad excepcional gracias a su sistema de altavoces bidireccionales, con un driver optimizado en forma de pista de carreras, un altavoz de agudos independiente y dos radiadores pasivos (uno a cada lateral). Este altavoz, además de ofrecerte el mejor sonido, es fácil de transportar y es resistente al agua y al polvo, por lo que puedes llevarlo a cualquier parte, sin importar el tiempo que haga. Y con 12 horas de batería, puedes irte de fiesta desde el amanecer al anochecer, allá donde te lleve la música. Usa PartyBoost para conectar varios altavoces compatibles. El Flip 6 está disponible en una gran variedad de colores.",
  },
  {
    id: "producto7",
    nombre: "Bose Freespace 360p Ii ",
    precio: 135700,
    categoria: "parlantes-de-exterior",
    img: "https://www.bhphotovideo.com/images/images750x750/bose_professional_40151_freespace_360_p_ii_in_ground_1330013.jpg",
    stock: 10,
    descripcion:
      'Este altavoz ambiental de rango completo está diseñado para mezclarse con el paisajismo en aplicaciones de instalación en tierra o sobre tierra, como centros comerciales, restaurantes al aire libre, centros turísticos y parques temáticos. Cuenta con una cobertura horizontal de 360° y un rango de frecuencia de hasta 60 Hz. Altavoz ambiental de rango completo con un driver ambiental avanzado compuesto de rango completo de 114 mm (4.5") que apunta hacia abajo, para instalación en tierra o sobre tierraLa rejilla de puerto en forma de cúpula refleja el sonido en el área de escucha para un rendimiento claro y consistente. La forma del gabinete actúa como difusor acústico que dirige la energía de media y alta frecuencia hacia los oyentes. La base del altavoz actúa como una carcasa con reflexión de bajos, afinada y con varias cámaras',
  },
  {
    id: "producto8",
    nombre: "JBL Partybox 310",
    precio: 150000,
    categoria: "parlantes-de-fiesta",
    img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw1a83a1db/JBL_PartyBox_310_Hero_0176_x3.png?sw=537&sfrm=png",
    stock: 13,
    descripcion:
      "Su contundente sonido, deslumbrante iluminación e increíble potencia hacen que este altavoz destaque sobre la multitud. El JBL PartyBox 310 incluye toda la fiesta en un equipo transportable y a prueba de salpicaduras sin rival. Llega y haz sonar tus listas de reproducción favoritas en cualquier lugar, desde encuentros informales en casa a fiestas con baile en la playa. Sube las vibraciones de la fiesta con 240 vatios de sonido JBL Signature y un show de luces sincronizado que marcha al ritmo de la música. Ponte en marcha y haz que la diversión dure toda la noche o acude a la fogata y aprovecha sus impresionantes 18 horas de duración de batería. Empieza la fiesta con el JBL PartyBox 310.",
  },
  {
    id: "producto9",
    nombre: "JBL Partybox 710",
    precio: 162000,
    categoria: "parlantes-de-fiesta",
    img: "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw782afba0/1_JBL_PARTYBOX_710_HERO_0031_x8.png?sw=537&sfrm=png",
    stock: 5,
    descripcion:
      "El PartyBox 710 a prueba de salpicaduras transformará tu próximo evento en una fiesta, un concierto o una auténtica discoteca. Con un exclusivo y colorido espectáculo de luces sincronizado con el sonido JBL Original Pro. Los controles minimalistas e intuitivos del panel superior y la aplicación PartyBox te permiten crear experiencias musicales y visuales de alto nivel. Personaliza las luces estroboscópicas e intermitentes, así como del increíble sonido del conjunto doble de altavoces de agudos y de graves. El sonido True Wireless de un solo botón empareja al instante dos PartyBox 710 para montar una fiesta aún más grande. Y con una cómoda asa y unas ruedas robustas, podrás disfrutar de los buenos momentos en cualquier lugar.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategoriaId = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoriaId
          ? products.filter((prod) => prod.categoria === categoriaId)
          : products
      );
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

const categories = [
  { id: "auriculares", description: "Auriculares" },
  { id: "parlantes-portatiles", description: "Parlantes portatiles" },
  { id: "parlantes-de-fiesta", description: "Parlantes de fiesta" },
  { id: "parlantes-de-exterior", description: "Parlantes de exterior" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};
