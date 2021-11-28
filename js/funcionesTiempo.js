//Ejecutar una accion luego de un certo tiempo.

let contador = 1;

function saludar(){
    document.write("<br>Hola mundo")
    if(contador == 5){
        //cuando cumpla la condicion quiero detener el intervalo
        window.clearInterval(intervalo)
    }
    contador++
}

// window.setTimeout(saludar, 3000)  // en los parentesis se indica la funcion y los milisegundos a partir de que la funcion se ejecuta. La funcion se puede escribir en forma anonima si lleva parametros.

// Se puede escribir de otras maneras
setTimeout(saludar, 3500);

// si no voy a utilizar una funcion en otro lado, la puedo crear dentro del setTimeOut. La funcion se escribe de forma anonima o mejor aun en forma de flecha
//setTimeout(()=>{
 //   document.write("<br>Hola mundo")
//}, 4000)

// ejecutar una accion/funcion cada cierto tiempo en milisegundos

// window.setInterval(saludar, 2500);

let intervalo = window.setInterval(saludar, 2500); // al setInterval (y al setTimeOut, aunque es mas raro) puedo asignarle un identificador unico, o sea lo pongo como valor de una variable.

