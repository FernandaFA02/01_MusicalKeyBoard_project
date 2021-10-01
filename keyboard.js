//Alerta de bienvenida
alert("Hola Bienvenido!")

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u']//letras que activan las teclas blancas
const BLACK_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ']//letras que activan las teclas negras

const keys = document.querySelectorAll('.key')//Se crea la variable key para seleccionar todos los elementos con la clase .key
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key => { //Se crea funcion para elemnto key
    key.addEventListener('click', () => playNote(key))//Se arega addEventListener para cada vezz ue se de un click
})

document.addEventListener('keydown', e => { //Se crea un addEvent-listener para permitirnos reprducir el sonido
    if (e.repeat) return //Para que el sonido no se repita una y otra vez
    const key = e.key  //Para que se active la tecla exacta que presionamos
    const whiteKeyIndex =  WHITE_KEYS.indexOf(key) //Teclas blancas
    const blackKeyIndex =  BLACK_KEYS.indexOf(key) //Teclas negras

    if (whiteKeyIndex > -1) playNote(whitekeys[whiteKeyIndex])//Se buscan la teclas blancas correspondientes a su index dentro de su arreglo para que pueda reproducir el sonido
    if (blackKeyIndex > -1) playNote(blackkeys[blackKeyIndex])//Se buscan la teclas negras correspondientes a su index dentro de su arreglo para que pueda reproducir el sonido
})

function playNote(key) { // se crea una funcion para darle una base y atraer los audios por medio de un getElementbyId
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0 //Para evitar que al presionar por mucho tiempo la nota suene mal
    noteAudio.play()
    key.classList.add('active') //Para que se pinte la tecla de otro color en css cuando se active
    noteAudio.addEventListener('ended', () => { //Para que cuando el audio se detenga, el cambio de color también
        key.classList.remove('active')
    })
}