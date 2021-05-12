import db from '../Firebase/index'

const itemCollection = db.collection('items');

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



// Llamados de petición a FireStone de FireBase

// Llamo TODOS los productos
export const getAllProducts = new Promise((resolve,reject) => {
    itemCollection.get()
        // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
        .then(snapshot => resolve(snapshot.docs.map(doc=>doc.data())))
        .catch(err=>reject(err))
    
})

// Llamo TODOS los productos
export const getProductsById = new Promise((resolve,reject) => {
    itemCollection.get()
        // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
        .then(snapshot => resolve(snapshot.docs.map(doc=>doc.data())))
        .catch(err=>reject(err))
})

// Llamo producto por id
export function getProductForId(id) {
    console.log('Se ejecuta función getProductoForID')
    console.log(`Esto recibe Services de id: ${id}`)
    
    const productsById = new Promise((resolve,reject) => {

        const itemById = itemCollection.where('id', '==', `${id}`)
        console.log(itemById)

        itemById.get()
            // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
            .then((querySnapshot) => {
                console.log('Esto trae snapshot')
                console.log(querySnapshot)
                console.log(querySnapshot.size)
                if (querySnapshot.size===0) {
                    return console.log('No hay elementos con ese id')
                }
                resolve(querySnapshot.docs.map(doc=>doc.data()))
            })
            .catch(err=>reject(err))
    })
}


// Llamado de petición fetch para TODO
// const getProducts = new Promise ((resolve,reject) => {

//     fetch('https://raw.githubusercontent.com/marcobertonati/UniqueCommerce-Bertonati/main/src/Data/itemsJSON.json')
//         .then(response=>response.json())
//         .then(data=>resolve(data))
//         .catch(err=>reject(err))
// })



// Llamado de petición fetch para ID
// const getIdProducts = new Promise ((resolve,reject) => {

//     fetch('https://raw.githubusercontent.com/marcobertonati/UniqueCommerce-Bertonati/main/src/Data/itemsJSON.json')
//         .then(response=>response.json())
//         .then(data=>resolve(data))
//         .catch(err=>reject(err))
// })

// Exportamos Promesas
// module.exports = {
//     getProducts,
//     getIdProducts,
// }