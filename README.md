
# SonorouS 🎧

## Instalación

Si quieres acceder al proyecto, puedes clonarlo ejecutando esto en tu consola:

```sh
https://github.com/alessia-pc/Curso-react.git
```

A su vez, debes ejecutar esto: 

```sh
npm install
```

```sh
npm start
```

## Tecnologías utilizadas

- 🖥️ HTML
- 🖥️ CSS
- 🖥️ JavaScript
- 🖥️ React JS

## Dependencias

- ⚒️ Formik ➡️ Formulario 
- ⚒️ Yup ➡️ Validación de formulario
- ⚒️ React-router-dom ➡️ Routing de la pagina
- ⚒️ React-Firebase ➡️ Base de datos

## Firebase / Firestore 📁

- Colección: _products_. Los productos tienen las siguientes propiedades:

| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| nombre | string | Nombre del producto |
| precio | number | Precio |
| categoria | string |  Categoría del producto |
| descripcion | string | Descripción del producto |
| img | string | Link de la imagen |
| stock | number | Stock del producto |

- Colección: _categorias_. Las categorías tienen las siguietes propiedades: 

| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| description | string | Categoría del producto |

- Colección: _orders_. Las ordenes tienen las siguietes propiedades:

La colección order también presenta distintas colecciones:

- Colección: _compradorUser_:

| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| nombre | string | Nombre del usuario
| telefono | string | Número de telefono del usuario |
| direccion | string | Dirección del usuario |
| email | string | Email del usuario |

- Coleccion: _date_:

| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| date | timestamp | Hora de la orden |

- Coleccion: _items_:

| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| id | string | Id del item |
| nombre | string | Nombre del item |
| precio | number | precio del item |
| quantity | number | cantidad del item |

- Coleccion: _total_:
 
| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| total | number | Total de la orden |

## Análisis y funcionalidad de los componentes 📑

Al iniciar en la web nos encontraremos en la ruta '/', aquí se encuentra el inicio de la página, con el listado de productos, un banner, un navbar y un footer, este footer es el componente Footer 🗃️
. Cada producto es una card, estas cards son el componente Item 🗃️
 y contienen el nombre del producto, el precio, una imagen y un botón con el nombre de "Ver detalles". Este botón te llevará al componente ItemDetailContainer 🗃️
. Esto trae al componente ItemDetail 🗃️
, en este podemos ver más acerca de nuestro producto, podrémos ver el nombre, el precio, la imagen, el stock, una descripción, también podrémos ver botones para manejar la cantidad de nuestro producto y un botón con el nombre de "Agregar al carrito", al clickear este botón nos aparecerá otro botón con el nombre de "Ir al carrito", este nos llevará al componente Cart 🗃️
. Estos botones se encuentran en el componente de ItemCount 🗃️
, y este te permitirá elegir la cantidad de tu producto seleccionado y agregarlo al carrito.

A su vez, en el navbar encontramos el componente NavBar 🗃️
. En este encontraremos diferentes li con sus respectivos NavLiks y sus rutas:

- Logo SonorouS➡️ _Es un NavLink que nos llevará a la ruta '/'_, mostrando el inicio de la página.

- Inicio ➡️ _Es un li con un NavLink que nos lleva a la ruta '/inicio'_. Estando en esta ruta lo que veremos es el componente Inicio 🗃️
, que nos mostrará el inicio de la página, es decir, el navbar, un banner, un listado de productos y finalmente un footer. 

- Productos ➡️ _Es un li con un NavLink que nos lleva a la ruta '/productos'_. En esta ruta veremos el listado de productos, sin ningun tipo de filtro, mientras se carguen los productos en la web estarémos viendo un spinner, y este es el componente Spinner 🗃️
. Si pasamos el cursor por el li "Productos" podrémos ver un menú desplegable que nos mostrará las distintas categorias de nuestros productos. En estas categorías vamos a encontrar: '_Auriculares_, _Parlantes de exterior_, _Parlantes de fiesta_, _Parlantes portatiles_'. Estas categorías provienen de una colección de firebase, llamada "_categorias_", esta coleccion nos permitirá filtrar las categorías por su id. De esta manera: 'categorias/:id ➡️ categorias/categoriaId'. Al clickear en alguna de estas categorías, encontrarémos el componente ItemListContainer 🗃️
, que comprende al componente ItemList 🗃️
, en este se realiza un mapeo de los productos según la categoría a la que pertenezcan. También al encontrarnos aquí veremos los componentes ItemDetailContainer 🗃️
, ItemDetail 🗃️
 e Item 🗃️


- Contacto ➡️ _Es un li con un NavLink que nos lleva a la ruta '/contacto'_. En esta ruta podrémos ver el componente Contacto 🗃️
, este nos muestra un email de contacto.

- Carrito ➡️ _Es un li con un NavLink que nos lleva a la ruta '/carrito'_. Este icono de un carrito es el componente CartWidget 🗃️
, al cual podemos acceder en todo momento y nos irá mostrando la cantidad de productos que se encuentran en nuestro carrito. Haciendo click en este podrémos ver el resumen de nuestro carrito de compras, el resumen de nuestra compra la veremos en el componente Cart 🗃️
, este contiene dos botones, uno con el nombre de "Vaciar carrito" y otro con el nombre de "Finalizar compra", a su vez contiene el componente ItemCart 🗃️
, en el cual podrémos ver los datos de los productos que vamos agregando al carrito y un botón de una basurita para eliminar el item del carrito. Para que nuestro carrito funcione perfectamente necesitamos el componente CartContext, en el cual se encuentran distintas funciones: 

🛒 anadirItem ➡️ Esta función nos permite añadir productos al carrito, a su vez nos permite identificar si el producto ya está en el carrito modificando únicamente la cantidad del producto y evitando así, que se genere otro item de ItemCart.

🛒 isInCart ➡️ Esta función verifica si el producto se encuentra o no en el carrito.

🛒 getQuantity ➡️ Esta función hace que al agregar productos al carrito podamos ver la cantidad de los mismos en el componente CartWidget.

🛒 limpiarCart ➡️ Esta función le da funcionalidad al botón de "Vaciar carrito", eliminando todos los productos que se encuentren en el carrito.

🛒 removeItem ➡️ Esta función le da funcionalidad al botón de la basurita en el componente ItemCart, eliminando el producto correspondiente a ese id y seteando el valor nuevo del CartWidget.

🛒 getQuantityProducto ➡️ Esta función guarda la cantidad seleccionada del producto en el contador en ItemDetail.

🛒 totalCost ➡️ Esta función nos permirte calcular el valor total de la compra que hicimos

## Así verás la página

### Alessia María Puga Cammuso 👩🏻‍💻







