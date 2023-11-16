// estructuras de control
// condicionales y ciclos
// while do while y for
// continue break y debugger palabras reservadas

// indice ,  condicional, incremento o decremento

// for (let index = 1; index < 6; index++) {
//     if (index = 3) {
//         break;
//     }
//     console.log(index);
//     debugger;
// }
// Funciones

// function suma(a,b,c){
//     return console.log(a+b+c);
// }

// const numero = [5,6,7];
// let resultadodefuncion = suma(...numero);
// console.log(resultadodefuncion);



// function functionsaludar(nombre) {
//     console.log("hola " + nombre + "desde una arrow");
// }

// functionsaludar("lorenzo");


// // FUNCION ANONIMA
// let hola = function () {
//     console.log("hola mundo anonima");
// }
// hola();

// // arrow function, funciones flecha, lambda, f

// let holaArrow = (nombre) => console.log("hola " + nombre + " desde una arrow");

// holaArrow("antho");


// function restar(a,b function()){{console.log("hola antho");}}

// CALULADORA

// function suma() {
//     let x = parseFloat(document.getElementById ("numero1").value);
//     let y = parseFloat(document.getElementById ("numero2").value);
//     let resultado = x + y;
//     let span = document.querySelector ("#resultado");
//     span.innerHTML = resultado;
//     console.log(resultado);
// }

// function resta() {
//     let x = parseFloat(document.getElementById ("numero1").value);
//     let y = parseFloat(document.getElementById ("numero2").value);
//     let resultado = x - y;
//     console.log(resultado);
// }
// function multiplicacion() {
//     let x = parseFloat(document.getElementById ("numero1").value);
//     let y = parseFloat(document.getElementById ("numero2").value);
//     let resultado = x * y;
//     console.log(resultado);
// }
// function division() {
//     let x = parseFloat(document.getElementById ("numero1").value);
//     let y = parseFloat(document.getElementById ("numero2").value);
//     let resultado = x / y;
//     console.log(resultado);
// }

// console.log('la suma es :' + resultado);


let boton = document.querySelector(".botonClick");

// EVENTOS DEL MOUSE
                // evento que se va escuchar : funcion que se va a ejecutar
boton.addEventListener("click", function(){
    console.log("dimos click en el boton click");
    boton.classList.toggle("verde");

})

boton.addEventListener("mouseover", function(){
    console.log("estamos sobre el boton click");

})

boton.addEventListener("mouseout", function(){
    console.log("salimos del boton");

})

// EVENTOS DE TECLADO

window.addEventListener('keydown', (e)=>{
    console.log('pulso una tecla')
    console.log(String.fromCharCode(e.keyCode))
})

window.addEventListener('keypress', (e)=>{
    console.log('presione una tecla')
    console.log(String.fromCharCode(e.keyCode))
})

window.addEventListener('keyup', (e)=>{
    console.log('deje de preionar una tecla')
    console.log(String.fromCharCode(e.keyCode))
})

window.addEventListener('load', ()=>{
    console.log('termine de cargar la pagina');
});

