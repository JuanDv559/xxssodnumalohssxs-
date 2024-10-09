// Import stylesheets
//import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

//console.log("despierte david viasus");
class Usuario {
    constructor(nombre, email) {}
}

let input = document.getElementById("nombre");

let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", () => {
    console.log(input.value);
});
