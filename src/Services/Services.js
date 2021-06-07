// Importo configuración de la base de datos de FireBase
import db from '../Firebase/index'
// Importo FIREBASE para otras funcionalidades
import * as firebase from 'firebase/app'


// Función que exporta la fecha
export const dateFirebase = firebase.default.firestore.Timestamp.fromDate(new Date())

//COLECCIÓN ITEMS
const itemCollection = db.collection('items');

//COLECCIÓN ORDERS
const ordersCollection = db.collection('orders');


// Función que setea un orden
export async function addOrders(newOrder) {

    await ordersCollection.add(newOrder)
        .then(
            ({id}) => {
                alert('¡Compra finalizada! ✅')
                alert(`Este es su id de comprobante 👉 ${id} 👈`)
             })
        .catch(
            (err) => {
                console.log('No resolvio promesa')
                alert('¡Woops! Ocurrió un error 😒')
                console.log(err)})
}


/////////////////////////////////////////
// PETICIONES A FIRESTONE DE FIRE BASE //
/////////////////////////////////////////

// LLAMADO A TODOS LOS PRODUCTOS
export const getAllProducts = new Promise((resolve,reject) => {
    itemCollection.get()
        // Este .then sería el equivalente al .JSON que jsonifica y te trae cada elemento
        .then(snapshot => {
            const idProduct = snapshot.docs.map(doc=>doc.data())
            resolve(snapshot.docs.map((doc)=> {
                return  {
                    ...doc.data(),
                    id: doc.id,
                }
            }))}
        )
        .catch(err=>reject(err))
})


// LLAMADO A PRODUCTOS POR ID
export async function getProductsById(id) {
    
    const itemRef = await itemCollection.get();

    const [productFinded] = itemRef.docs.filter(product=> product.id === id).map(product=>product.data())
    const [idProductFinded] = itemRef.docs.filter(product=> product.id === id).map(product=>product.id)

        // Recortar que en el 'const [productFinded] lo utilizo entre corchetes [] porque lo que devuelve el fiter es un array con un objeto adentro. Por lo cual cuando yo lo pongo entre [] lo devuelve desestructurado. También que utilizo == ya que devuelve un STRING y el otro es un NUMBER. Podría parsearlo para que sea más óptimo.

    const finalProductfinded = {
        ...productFinded,
        id: idProductFinded
    }

    return finalProductfinded;     

}