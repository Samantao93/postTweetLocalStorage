btnAgregar = document.querySelector('.button[type="submit"]');
tweet = document.querySelector('#tweet');
listaTweets = document.querySelector('#lista-tweets');

let arrayTweets = []

btnAgregar.addEventListener('click',añadirTweet);
document.addEventListener('DOMContentLoaded', addLocalStorage);

function addLocalStorage() {
    const storage = JSON.parse(localStorage.getItem('array'));
    if(storage){
        storage.forEach(element => {
            const {id} = element;
            crearObjectLista(element,id);
            console.log();
            
        });
        
    }
}

function añadirTweet(e) {
    e.preventDefault();
    if(tweet.value.trim() !== ''){
        const id = Math.random()
        crearObjectLista(tweet,id);
        return;
    }        
    mensajeError();
}

function crearObjectLista(tweet,id) {    
        let objTweets = {
            id: '',
            value: ''
        }
        const tweetToLista = document.createElement('LI');
        tweetToLista.textContent=tweet.value;
        tweetToLista.setAttribute('id', id);
        const removeButton = document.createElement('A');
        removeButton.classList.add('borrar-tweet');
        removeButton.textContent='X';

        objTweets.id=id;
        objTweets.value=tweet.value;

        tweetToLista.appendChild(removeButton);
        listaTweets.appendChild(tweetToLista);     

        removeButton.addEventListener('click', () => {
            eliminarTweet(id); // no puedo pasarle sólo una fórmula, ya que quiero añadir el id que ya tengo en esta función
        })
        
        arrayTweets.push(objTweets);
        localStorage.setItem('array',JSON.stringify(arrayTweets));
        
        return listaTweets;
}

function mensajeError() {
    const errorMensaje = document.createElement('DIV');
    errorMensaje.classList.add('error');
    errorMensaje.textContent='EL VALOR DEL TWEET NO PUEDE SER VACÍO';
    formulario.appendChild(errorMensaje);

    setTimeout(() => {
        errorMensaje.remove();
    },3000)
}

function eliminarTweet(id) {
    const borrarTweet = document.getElementById(id);
    if(borrarTweet){
        borrarTweet.remove();
    }

    const newArray = arrayTweets.filter((item) => item.id !== id); // no hay que poner {} y let no funciona tiene que ser const    
    localStorage.setItem('array',JSON.stringify(newArray));    
}