
const APIKEY = 'BgKv2lWDLJBHcSKriMZHo5YwTvpXhsUP';
const APIURL = 'https://api.giphy.com/v1/gifs';
let url = 'https://api.giphy.com/v1/gifs/search?api_key=' + APIKEY + "&limit=4&q=";


/*esto es para el onlcik*/


/*aca comienza el js*/

function buscarGift(search) {
 fetch ('https://api.giphy.com/v1/gifs/search?q=' + search + "&api_key=" + APIKEY)
    .then(response =>{
        return response.json();
    })
    .then(resultado => {
        cargarimagenes(resultado);
        console.log(resultado);
    })
    .catch(error => `Error en primer fetch: ${error}`);
}
