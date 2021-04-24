// Llamado de petición fetch
const getProducts = new Promise ((resolve,reject) => {

    fetch('https://raw.githubusercontent.com/marcobertonati/uniqueCatalogoMaps-Bertonati/main/src/Data/itemsJSON.json')
        .then(response=>response.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
})


module.exports = {
    getProducts
}