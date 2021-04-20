import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemCount from './components/ItemCount/ItemCount'
import ItemCountContainer from './Container/ItemCountContainer'

//llamado a app
// import callApi from './components/Api/ApiCall'
// console.log(callApi)

const nombre = fetch('https://rickandmortyapi.com/api/character/2')
.then(response => response.json())
.then(function (data) {
  console.log(data.name);
  console.log(typeof(data.name))
  return data.name;
})
.catch(err=>console.log(err))
console.log(`La api me trae: ${nombre}`)



function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemCountContainer/>
    </div>
  );
}
export default App;
