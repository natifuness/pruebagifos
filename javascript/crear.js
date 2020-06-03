//*LINK NEW HTML*/

function abrirCapturarVideo(){
    document.location.href="capturarvideo.html";
}


function volverInicio(){
    document.location.href="index.html";
}


/* CAPTURARVIDEO HTML*/

const APIKEY = "BgKv2lWDLJBHcSKriMZHo5YwTvpXhsUP"; 
var recorder = null;  // Inicio la variable recorder en null, porque la voy a usar en varios lados despues de obtener su valor.

function grabarVideo(){
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height:{max:388},
            width:{max:750}
        }
    })
    .then(function(stream) {
        var video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(ev){
            video.play();
        };   

        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 280,
            hidden: 240,
            
            onGifRecordingStarted: function() { 
                console.log('started')
            },
        });
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); });
}

/*CAMBIAR BOTONES*/
const boton = document.querySelector("#comienzo");
// Agregar listener
boton.addEventListener("click", function (evento) {
	this.innerHTML = "";
});


/*PARAR VIDEO*/

stopRec.addEventListener('click', (event) => {
    recorder.stopRecording(function(){  // Cuando se realiza el stop de la grabacion, se obtiene un objeto blob con los datos del archivo.
        let blob = recorder.getBlob();

        let form = new FormData();  // Utilizamos formdata para preparar la informacion para mandar a la api
        form.append('file', blob, 'myGif.gif');

        const sugerencias = fetch('https://upload.giphy.com/v1/gifs?api_key=' + APIKEY,  // Invocamos la api de Giphy con la key
        {
            method: 'post', // Seteamos el metodo que vamos a usar, en este caso, Post.
            body: form  //En el body van los parametros que recibe la api.
        })
        .then(response => {
            console.log( response.json());
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            return error;
        });
  
    });
    
});



/*grabarVideo(); // Abre la pagina y se activa la camara*/