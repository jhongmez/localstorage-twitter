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
    e.preventDefault();
    console.log('Formulario enviado');
}