/*
    Variables
*/
const listaTweets = document.querySelector('#lista-tweets');


/*
    Event listeners
*/
eventListeners();
function eventListeners() {
    //Cuando enviemos el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}

/*
    Funciones
*/
function agregarTweet(e) {
    // Con el prevent default hacemos que la pagina no se nos recargue
    e.preventDefault();


    // creamos una varibale y en ella obtenemos el ID del textarea con el value
    const tweet = document.getElementById("tweet").value;


    // creamos el boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';  
    botonBorrar.textContent = 'X';


    // creamos una varible la cual nos va a agregar un elemento <li></li>
    const lista = document.createElement('li');
    lista.textContent = tweet;
    // A esta variable le agregamos la propiedad appendChild la cual hace que su hijo sea lo que contiene lista
    listaTweets.appendChild(lista);
    // agregamos en boton borrar con appendChild
    lista.appendChild(botonBorrar);


    console.log(listaTweets);
}