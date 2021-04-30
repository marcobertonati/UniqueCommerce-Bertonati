# UNIQUE 🛒

_UNIQUE es una plataforma e-commerce que busca ayudar a causas benéficas y a la vez a los/as vendedores._

## Desarrollo 💻

El desarrollo de la web es enteramente a partir de ReactJS. A su vez, consume el módulo de react-bootstrap 1.5.2 para fines estéticos y de organización visual. En un futuro se planea eliminar los componentes standar y desarrollar propios que respondan al branding de la marca.

## ¿Cómo visualizar el proyecto? 💻

¡Es muy simple! Crea una carpeta en tu escritorio con el nombre Unique. 

Luego ejecuta una terminal y encuentrate parado en dicha carpeta. 

Clona este repositorio a través del siguiente comando:

```
git clone https://github.com/marcobertonati/uniqueDetail-Bertonati
```

Una vez clonado solo deberás installar todas las dependencias:

```
npm install
```

¡Perfecto! Ahora simplemente deberás ejecutar el proyecto:

🚨 RECUERDA NO TENER NADA FUNCIONANDO EN EL PUERTO LOCALHOST:3000🚨

```
npm start
```

## Arquitectura 💡

El proyecto se encuentra divido en componentes que se van a visualizar, y cotenedores que van a manejar toda la lógica y datos que van a pasar a través de props a sus componentes.
Existen 2 grandes Containers:

* ItemListContainer.js => El cuál renderiza tantas cards como items que retornan de una promesa fetch al 'servidor'.
* ItemDetailContainer.js => Funciona de la misma manera que ItemListContainer, pero dicho contenedor solo renderiza un item en particular con todos los datos que trae de la promesa-fetch. Ese item en particular es tomado a partir del boton 'Ver Detalles/Descripción' y renderiza el componente ItemDetail.js

## Lo que se viene 💡
_En proceso..._ 🛠️
* ¡Ya no solo podremos ver productos! También lo podremos agregar a un carrito.
* Lo sabemos, estamos trabajando en su diseño para un mejor experiencia.

## Autores @marco.bertonati ✒️
_Proyecto del curso de [ReactJS por Coderhouse](https://www.coderhouse.com/online/reactjs)_
Camada-11370-online
* **Luciano Calderon** - *Profesor del curso de ReactJS* 👨🏻‍🏫
* **Alejandro Saez** - *Tutor de clase* 👨‍💻

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
