import db from '../Firebase/index'
import * as firebase from 'firebase/app'

export const dateFirebase = firebase.default.firestore.Timestamp.fromDate(new Date())

//COLECCIÓN ITEMS
const itemCollection = db.collection('items');

//COLECCIÓN ORDERS
const ordersCollection = db.collection('orders');


// Función que setea un orden
export function addOrders(newOrder) {
    console.log('SERVICES: Se ejecutó función addOrders')
    console.log('Esto llega de la orden de compras para agregar a firebase')
    console.log(newOrder)

    const ordenes = ordersCollection.get().then(data=>data.docs.map(ordern=>ordern.data()))
    
    ordenes.
        then(data => {
            console.log(data)
        })
        .catch(err=> {
            console.log(err)
        })   

    ordersCollection.add(newOrder)
        .then(
            ({id}) => {
                alert('Resolvio promesa')
                alert('¡Compra finalizada')
                alert(`Este es su id de comprobante ${id}`)
             })
        .catch(
            (err) => {
                alert('Entró a problema')
                console.log(err)})

    console.log('Sale de addOrders')

}







/////////////////////////////////////////
/////////////////////////////////////////
//                                     //
// PETICIONES A FIRESTONE DE FIRE BASE //
//                                     //
/////////////////////////////////////////
/////////////////////////////////////////

// LLAMADO A TODOS LOS PRODUCTOS
export const getAllProducts = new Promise((resolve,reject) => {
    itemCollection.get()
        // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
        .then(snapshot => {
            console.log('SERVICES > FUNCIÓN GETALLPRODUCTS')
            console.log(snapshot.docs.map(e=>e.data()))
            console.log(snapshot.docs.map(e=>e.id))
            const idProduct = snapshot.docs.map(doc=>doc.data())
            resolve(snapshot.docs.map((doc)=> {
                return  {
                    id: doc.id,
                    ...doc.data()
                }
            }))}
        )
        .catch(err=>reject(err))
})



////////////////////////////////
// LLAMADO A PRODUCTOS POR ID //
////////////////////////////////

// export function getProductsById(id) {
    
//     console.log(`El id que trajo la función es: ${id}`)
//     itemCollection.get()
//     // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
//         .then((querySnapshot) => {
//             console.log('Esto trae snapshot')
//             console.log(querySnapshot)
//             console.log(querySnapshot.size)

//             const productFinded = querySnapshot.docs.filter(product=> product.id === id).map(product=>product.data())
//             console.log(productFinded)

//             if (querySnapshot.size===0) {
//                 return console.log('No hay elementos con ese id')
//             }
//             return productFinded
//         })
//         .catch(err=>(err))

// } 

export async function getProductsById(id) {
    
    const itemRef = await itemCollection.get();

    console.log(itemRef)
    const [productFinded] = itemRef.docs.filter(product=> product.id === id).map(product=>product.data())

        // Recortar que en el 'const [productFinded] lo utilizo entre corchetes [] porque lo que devuelve el fiter es un array con un objeto adentro. Por lo cual cuando yo lo pongo entre [] lo devuelve desestructurado. También que utilizo == ya que devuelve un STRING y el otro es un NUMBER. Podría parsearlo para que sea más óptimo.

    return productFinded;     

} 


/////////////////////////////////////
// Llamo producto por id por WHERE //
/////////////////////////////////////

// export function getProductForIdByWhere(id) {
//     console.log('Se ejecuta función getProductoForID')
//     const productId = id
//     console.log(`El id de getProductForId es ${productId}`)
    
//     const productsById = new Promise((resolve,reject) => {
//         console.log('SE EJECUTA PROMESA PRODUCTSBYID')
//         console.log(`Este ID trae dentro de la promesa ${productId}`)

//         const itemById = itemCollection.where('id', '==', `${id}`)
//         console.log(itemById.get().then(data=>data.docs.map(info=>info.data())))

//         itemById.get()
//             // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
//             .then((querySnapshot) => {
//                 console.log('Esto trae snapshot')
//                 console.log(querySnapshot)
                
//                 const productFinded = querySnapshot.docs.map(query=>query.data())
//                 console.log(productFinded)

//                 console.log(querySnapshot.size)
//                 if (querySnapshot.size===0) {
//                     return console.log('No hay elementos con ese id')
//                 }
//                 resolve(querySnapshot.docs.map(doc=>doc.data()))
//             })
//             .catch(err=>reject(err))
//     })
// }









////////// DOOM DE COMENTADO ////////// 
//De acá abajo no sirve, es como llamaba anteriormente la "base de dadots"


// Llamado de petición fetch para TODO con un async mock
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