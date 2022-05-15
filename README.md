<!-- # Proyecto React - Alessia Puga Cammuso

Soy Alessia Puga Cammuso y este es mi proyecto para el curso de React de CoderHouse. Mi proyecto se llama Tierra ruidosa y es una página en la cual encuentras productos que te llevan a vivir la musica de una manera increible! En el proyecto utilicé la libreria de routing y algunos hooks!
 -->

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
| categoria | string |  Categoria del producto |
| descripcion | string | Descripcion del producto |
| img | string | Link de la imagen |
| stock | number | Stock del producto |

- Colección: _categorias_. Las categorías tienen las siguietes propiedades: 

| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| description | string | Categoría del producto |

- Colección: _orders_. Las ordenes tienen las siguietes propiedades:

La colección order también presenta distintas colecciones:

- Coleccion: _compradorUser_:

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

Al iniciar en la web nos encontrarémos en la ruta '/', aquí se encuentra el inicio de la página, con el listado de productos, un banner, un navbar y un footer, este footer es el componente Footer 🔧. Cada producto es una card, estas cards son el componente Item 🔧 y contienen el nombre del producto, el precio, una imagen y un botón con el nombre de "Ver detalles". Este botón te llevará al componente ItemDetailContainer 🔧. Esto trae al componente ItemDetail 🔧, en este podemos ver más acerca de nuestro producto, podrémos ver el nombre, el precio, la imagen, el stock, una descripción, también podrémos ver botones para manejar la cantidad de nuestro producto y un boton con el nombre de "Agregar al carrito", al clickear este botón nos aparecerá otro botón con el nombre de "Ir al carrito", este nos llevará al componente Cart 🔧. Estos botones se encuentran en el componente de ItemCount 🔧, y este te permitirá elegir la cantidad de tu producto seleccionado y agregarlo al carrito.

A su vez, en el navbar encontramos el componente NavBar 🔧. En este encontraremos diferentes li con sus respectivos NavLiks y sus rutas:

- Logo ➡️ _Es un NavLink que nos llevará a la ruta '/'_, mostrando el inicio de la página.

- Inicio ➡️ _Es un li con un NavLink que nos lleva a la ruta '/inicio'_. Estando en esta ruta lo que veremos es el componente Inicio 🔧, que nos mostrará el inicio de la página, es decir, el navbar, un banner, un listado de productos y finalmente un footer. 

- Productos ➡️ _Es un li con un NavLink que nos lleva a la ruta '/productos'_. En esta ruta veremos el listado de productos, sin ningun tipo de filtro, mientras se carguen los productos en la web estarémos viendo un spinner, y este es el componente Spinner 🔧. Si pasamos el cursor por el li "Productos" podrémos ver un menú desplegable que nos mostrará las distintas categorias de nuestros productos. En estas categorías vamos a encontrar: '_Auriculares_, _Parlantes de exterior_, _Parlantes de fiesta_, _Parlantes portatiles_'. Estas categorías provienen de una colección de firebase, llamada "_categorias_", esta coleccion nos permitirá filtrar las categorías por su id. De esta manera: 'categorias/:id ➡️ categorias/categoriaId'. Al clickear en alguna de estas categorías, encontrarémos el componente ItemListContainer 🔧, que comprende al componente ItemList 🔧, en este se realiza un mapeo de los productos según la categoría a la que pertenezcan. También al encontrarnos aquí veremos los componentes ItemDetailContainer 🔧, ItemDetail 🔧 e Item 🔧

- Contacto ➡️ _Es un li con un NavLink que nos lleva a la ruta '/contacto'_. En esta ruta podrémos ver el componente Contacto 🔧, este nos muestra un email de contacto.

- Carrito ➡️ _Es un li con un NavLink que nos lleva a la ruta '/carrito'_. Este icono de un carrito es el componente CartWidget 🔧, al cual podemos acceder en todo momento y nos irá mostrando la cantidad de productos que se encuentran en nuestro carrito. Haciendo click en este podrémos ver el resumen de nuestro carrito de compras, el resumen de nuestra compra la veremos en el componente Cart 🔧, este contiene dos botones, uno con el nombre de "Vaciar carrito" y otro con el nombre de "Finalizar compra", a su vez contiene el componente ItemCart 🔧, en el cual podrémos ver los datos de los productos que vamos agregando al carrito y un botón de una basurita para eliminar el item del carrito. 

Si queremos seguir con la compra debemos clickear el botón que nombramos, "Finalizar compra", esto nos llevará al componente Formulario 🔧, llevandonos a su vez a la ruta '/formulario'. En este componente debemos completar 5 campos: _Nombre y apellido_, _Telefono_, _Email_, _Confirmación de email_ y _Dirección_. Todos los campos necesitan estar completos para poder seguir con la compra, en el caso de los emails deben estar iguales. Cuando todos los campos están completos, debemos clickear el botón de "Finalizar orden" el cual nos generará un id, generado en la colección "_orders_" en firebase. 









