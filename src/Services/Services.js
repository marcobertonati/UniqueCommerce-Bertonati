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
    getIdProducts
}