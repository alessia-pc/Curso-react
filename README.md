<!-- # Proyecto React - Alessia Puga Cammuso

Soy Alessia Puga Cammuso y este es mi proyecto para el curso de React de CoderHouse. Mi proyecto se llama Tierra ruidosa y es una página en la cual encuentras productos que te llevan a vivir la musica de una manera increible! En el proyecto utilicé la libreria de routing y algunos hooks!
 -->

# TIERRA RUIDOSA 🎶

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

🖥️ HTML
🖥️ CSS
🖥️ JavaScript
🖥️ React JS

## Dependencias

⚒️ Formik ➡️ Formulario 
⚒️ Yup ➡️ Validación de formulario
⚒️ React-router-dom ➡️ Routing de la pagina
⚒️ React-Firebase ➡️ Base de datos

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

| compradorUser 
| Campo | Tipo | Valor |
| nombre | string | Nombre del usuario
| telefono | string | Número de telefono del usuario |
| direccion | string | Dirección del usuario |
| email | string | Email del usuario |

| date |  |  |
| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| date | timestamp | Hora de la orden |

| items |  |  |
| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| id | string | Id del item |
| nombre | string | Nombre del item |
| precio | number | precio del item |
| quantity | number | cantidad del item |

| total | ------ | ------ |
| Campo | Tipo | Valor |
| ------ | ------ | ------ |
| total | number | Total de la orden |



