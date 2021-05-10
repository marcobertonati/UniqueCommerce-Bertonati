// import db from '../firebase'

// const itemCollection = db.collection('items');

// function getItems() {
//     return itemCollection.get()
//         .then(snapshot => {
//             return snapshot.docs.map(doc => doc.data())
//         })
    
// }

// ese id tiene que traerlo del url-params
// getITemById(id) {
//     return itemCollection.doc(id).get().then(snapshot=> snapshot)
// }

// EL ERROR ES PORQUE TENES QUE SACAR EL MODULE EXPORT

// EL QUERY FILTRADO ES EL WHERE.. WHERE=1 ... o WHERE=collares


// Aclaración: Se que setoy haciendo 2 rutas que hacen exactamente lo mismo. Solo estoy usando 2 a manera pedagógica mái de ponerle nombre a los diferentes procesos.

// Llamado de petición fetch para TODO
const getProducts = new Promise ((resolve,reject) => {

    fetch('https://raw.githubusercontent.com/marcobertonati/UniqueCommerce-Bertonati/main/src/Data/itemsJSON.json')
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
})



// Llamado de petición fetch para ID
const getIdProducts = new Promise ((resolve,reject) => {

    fetch('https://raw.githubusercontent.com/marcobertonati/UniqueCommerce-Bertonati/main/src/Data/itemsJSON.json')
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
})

// Exportamos Promesas
module.exports = {
    getProducts,
    getIdProducts,

}