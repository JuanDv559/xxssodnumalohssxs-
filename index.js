// Import stylesheets
//import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

//console.log("despierte david viasus");
class Usuario {
    constructor(nombre, email) {}
}
let usuarios = [];

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");

let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", () => {
    let usuario = new Usuario();
    (usuario.nombre = nombre.value),
    
        (usuario.email = email.value),
        usuarios.push(usuario);
    nombre.value = "", email.value = "",
    console.log(usuarios.length);
    console.log(usuarios);
});
