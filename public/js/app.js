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

    //borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded', cargarLocalStorage);
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

    //añadir a localstorga
    agregarTweetLocalStorage(tweet);

}


//Eliminar tweet del DOM
function borrarTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove());
        alert('Tweet eliminado');
    }

}


function cargarLocalStorage() {
    let tweets;

    //traemos esta funcion para que nos cargue los tweets que fueron almacenados
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
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
    });
}


function agregarTweetLocalStorage(tweet) {
    
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets', JSON.stringify(tweets));

}


// se encarga de que hayan elementos en localstorage
function obtenerTweetsLocalStorage() {
    let tweets;

    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;

}