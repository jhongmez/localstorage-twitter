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

    // creamos una varible la cual nos va a agregar un elemento <li></li>
    const lista = document.createElement('li');

    // A esta variable le agregamos la propiedad innerText la cual nos coloca el texto
    lista.innerText = tweet;

    // A esta variable le agregamos la propiedad appendChild la cual hace que su hijo sea lo que contiene lista
    listaTweets.appendChild(lista);
}