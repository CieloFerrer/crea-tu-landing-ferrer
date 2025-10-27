# NavegaLasRutas + Ferrer

Este proyecto corresponde a la **Entrega 2 del curso de React Js**, donde se implementa la navegación entre vistas utilizando **React Router**.  
Forma parte de la evolución del proyecto **Crea tu Landing - Ferrer**.


## 🚀 Objetivo

Implementar la funcionalidad de **navegación entre las diferentes vistas** de una tienda online.  
El usuario puede:
- Navegar entre categorías desde el menú.
- Ver los productos filtrados por categoría.
- Acceder al detalle de cada producto.
- Visualizar una página 404 para rutas inexistentes.


## 🧩 Componentes principales

- `NavBar.jsx` → Barra de navegación con enlaces a categorías y carrito.  
- `CartWidget.jsx` → Ícono del carrito de compras.  
- `ItemListContainer.jsx` → Contenedor que muestra productos según la categoría seleccionada.  
- `ItemList.jsx` y `Item.jsx` → Componentes de presentación de cada producto.  
- `ItemDetailContainer.jsx` y `ItemDetail.jsx` → Vista de detalle de un producto.  
- `data/productos.js` → Simulación de base de datos con Promises (asíncrono con retardo).


## 🧠 Conceptos aplicados

- Rutas dinámicas con **React Router DOM** (`useParams` y `<Routes>` / `<Route>`).
- Promesas simulando llamadas a datos con retardo (`setTimeout`).
- Uso de **props** para pasar información entre componentes.
- Separación entre componentes contenedores y de presentación.
- Estilos en CSS organizados por componente.