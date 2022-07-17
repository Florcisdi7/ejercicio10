alert(Hola, te estaba esperando!)
let nombre = "Florencia Elisabet";
let apellido = 'Di Carlo '
let saludo = 'Te doy la bienvenida ';
let fraseCompleta = saludo + nombre + apellido;
console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje " + "esencial para crear " + 'sitios web poderosos.';
console.log(frase);



let numeroString1 = "Pato 10 ";
let numeroString2 = "Tino 20 ";
let numeroString3 = "Cami 30 ";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

let age = prompt('cual es tu edad?');
console.log(age);



sexo = prompt('introduce tu sexo');

if (sexo == 'masculino'){
    alert('podes entrar si sos mayor de 18');

    edad = prompt("Introduce tu edad");
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}

else if(sexo == 'femenino'){
    alert('mujeres solo mayores de 20');

    edad = prompt("Introduce tu edad");
    if (edad >= 20){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}else{
    alert('No cumples con las condiciones para ingresar')
}