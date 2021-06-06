# UNIQUE 🛒

_UNIQUE es una plataforma e-commerce que busca ayudar a causas benéficas y a la vez a los/as vendedores._

## Desarrollo 💻

El desarrollo de la web es enteramente a partir de ReactJS. A su vez, consume el módulo de react-bootstrap 1.5.2 para fines estéticos y de organización visual. En un futuro se planea eliminar los componentes standard, como por ejemplo los botones, y desarrollar propios que respondan al branding de la marca UNIQUE.

## Reminder de como visualizar el proyecto 💻

¡Es muy simple! Recuerda crear tu carpeta del proyecto con el nombre Unique. 

Luego ejecuta una terminal y encuentrate parado en dicha carpeta. 

Clona este repositorio a través del siguiente comando:

```
git clone https://github.com/marcobertonati/UniqueCommerce-Bertonati
```

Una vez clonado solo deberás instalar todas las dependencias:

```
npm install
```

¡Perfecto! Ahora simplemente deberás ejecutar el proyecto:

🚨 RECUERDA NO TENER NADA FUNCIONANDO EN EL PUERTO LOCALHOST:3000🚨

```
npm start
```

## Arquitectura 💡

El proyecto se encuentra divido en componentes que se visualizan, y cotenedores que manejan toda la lógica y datos que van a pasar a través de props a sus componentes hijos.

Existen 4 Containers que manejan toda la lógica de la página:

* ItemListContainer.js => El cuál renderiza tantas cards como items el cual retornan de una promesa fetch al la base de datos de Firebase. Dicho contenedor es utilizado para imprimirse en 2 componentes:
    1️⃣ En la home, donde se renderiza TODOS los productos de la base de datos.
    2️⃣ En la sección por categoría, donde solo renderiza los productos de determinada categoría. La categoría es adquirida a traves del hook useParams.

* ItemDetailContainer.js => Funciona de la misma manera que ItemListContainer, pero dicho contenedor solo renderiza un item en particular con todos los datos que trae de la promesa fetch a la base de datos de Firebase. Ese item en particular es tomado a partir del boton 'Ver Detalles' y renderiza el componente ItemDetail.js

* ItemCountContainer => Maneja la lógica acerca de los items que se van a ir agregando al carrito. Este contenedor es renderizado dentro del ItemDetailContainer e ItemListContainer. 

* CheckoutContainer => Maneja la lógica que muestra toda la información de los productos agregados en el carrito y los datos de quien solicita comprarlos.

## Lo que se viene 🛠️
_En proceso..._ 
* ¡Podrás cargar tus productos teniendo una cuetna registrada y verificada!
* En el feed de nuestra home aparecerán en el top los productos que mayor porcentaje de donación en la venta tengan.

## Autores [@marco.bertonati](https://www.linkedin.com/in/marcobertonati/) ✒️
_Proyecto del curso de [ReactJS por Coderhouse](https://www.coderhouse.com/online/reactjs)_
Camada-11370-online
* **Luciano Calderon** - *Profesor del curso de ReactJS* 👨🏻‍🏫
* **Alejandro Saez** - *Tutor de clase* 👨‍💻
