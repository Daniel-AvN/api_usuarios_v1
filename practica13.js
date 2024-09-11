// Dan-AvN

const boton = document.getElementById('mostrar')
const imagen = document.getElementById('imagenes')

boton.addEventListener('click', () => {
    //fetch solicitar info de una pagina, trae un archivo json
    fetch('https://randomuser.me/api/')  
    .then(respuesta => respuesta.json() ) //cuando trae la peticion genera una respuesta y esta la guardamos en un archivo json
    .then(json => {
        json= json.results 
        console.log(json);
        imagen.innerHTML = `<div id="tarjeta"> <img src="${json[0].picture.large}"> nombre: ${json[0].name.first} <br>
        apellido: ${json[0].name.last} <br> email: ${json[0].email} <br> phone: ${json[0].phone} <br>
        location: ${json[0].location.city} <br>  nombre de usuario: ${json[0].login.username} <br>
        </div>`

    })

})