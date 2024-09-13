import './style.css'


//1.

//Ejercicio 2:
//Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y haz que c sea la suma de a y b. Imprime el resultado en la consola.
/*
let a,b,c
a=5
b=10
c = a + b
console.log(`La suma de a y b es: `, c)

*/

//Ejercicio 3:
//Escribe un programa que pida al usuario su nombre y lo almacene en una variable. Luego, imprime un saludo en la consola que incluya el nombre del usuario.
//Requisito: se debe utilizar la instrucción prompt y pedir mediante este elemento el nombre y luego mostrarlo en consola
/*
const nombre = prompt("¿Cuál es tu nombre?")
console.log(`Hola ${nombre}`);
*/

//2. Operadores lógicos y condicionales

//Ejercicio 1:
//Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado en la consola.

// -- variables declaradas arriba  en 1.2 --

/*

a = prompt("Ingresa el valor de a: ")
b = prompt("Ingresa el valor de b: ")
c = prompt("Ingresa el valor de c: ")

let mayor = a

if (b>mayor) {
  mayor = b
}
if(c>mayor) {
  mayor = c
}

console.log("El mayor de los 3 valores ingresados es: ", mayor)
*/

//Ejercicio 2:
//Crea un programa que pida al usuario un número y determine si es par o impar.
//Requisitos:  utilice la instrucción propmt  si es par, debe mostrar "El número (numeroIngresado) es par", y si es impar, "El número  (numeroIngresado) es impar".
/*
let n1 = prompt("Ingresa un numero:")
let n1_a = Math.abs(n1)

if (n1_a==0 || n1_a/2==0) {
  console.log(`El numero (${n1}), es par`)
} else {
  console.log(`El numero (${n1}), es impar`)

}

*/

//3. Operadores de asignación y bucles

//Ejercicio 1:
//Crea un script que inicialice una variable en 10 y luego use un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0. Imprime el valor de la variable en cada iteración.
/*
let n2 = 10
console.log("Ejercicio 3")

while (n2>=0) {
  console.log(n2)
  n2 -= 1
}

*/
//Ejercicio 2:
//Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.
/*
let n3
do {
  n3 = prompt("Ingrese un numero mayor a 100, de lo contrario, deverá volver a ingresarlo: ")
} while (n3 < 100)

*/

//4. Funciones de JavaScript

//Ejercicio 1:
//Escribe una función llamada esPar que reciba un número como parámetro y retorne true si el número es par y false si es impar. Prueba la función con diferentes números.
/*
function esPar(numero) {
  return numero % 2 === 0
}

// Pruebas de la función
console.log(esPar(4))  
console.log(esPar(7))  
console.log(esPar(0))  
console.log(esPar(-2))
console.log(esPar(13))

*/
//Ejercicio 2:
//Crea una función llamada convertirCelsiusAFahrenheit que reciba un valor en grados Celsius y lo convierta a Fahrenheit. La fórmula es F = C × 1.8 + 32. Muestra el resultado en la consola.
/*
function convertirCelsiusAFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

// Pruebas de la función
console.log(convertirCelsiusAFahrenheit(0))
console.log(convertirCelsiusAFahrenheit(25))   
console.log(convertirCelsiusAFahrenheit(-10))  
console.log(convertirCelsiusAFahrenheit(100))  
*/

//5. Objetos en JavaScript
//Ejercicio 1:
//Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.
// Definir el objeto persona

const persona = {
  nombre: 'Ana',
  edad: 30,
  ciudad: 'Barcelona',
  cambiarCiudad(nuevaCiudad) {
      this.ciudad = nuevaCiudad
  },
  mostrarInformacion() {
      console.log(`Persona: ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}`)
  }
}
persona.mostrarInformacion()
persona.cambiarCiudad('Madrid')
persona.mostrarInformacion()

//Ejercicio 2:
//Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.
const libro = {
  titulo: 'El Quijote',
  autor: 'Miguel de Cervantes',
  año: 1605,
  esAntiguo() {
      const añoActual = new Date().getFullYear()
      return (añoActual - this.año) > 10
  }
}

console.log(`El libro "${libro.titulo}" es antiguo: ${(libro.esAntiguo() ? 'sí' : 'no')}`)


//6. Arrays

//Ejercicio 1:
//Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array. Muestra el array original y el nuevo array en la consola.
// Declara un array con los números del 1 al 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosMultiplicados = []

for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2)
}

console.log("Números originales:", numeros.join(","))
console.log("Números multiplicados por 2:", numerosMultiplicados.join(","))

//Ejercicio 2:
//Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue los primeros 10 números pares al array. Al final, imprime el array pares en la consola.

const pares = []

for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i)
  }
}
console.log("Primeros 10 números pares:", pares.join(","))

//7. Introducción al DOM

//Ejercicio 1:
//En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul

document.getElementById('color-button').addEventListener('click', function() {
  const paragraphs = document.querySelectorAll('#p-container p')
  paragraphs.forEach(p => p.style.color = 'blue')
})

//Ejercicio 2:
//Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario haga clic en el botón.

document.getElementById('alert-button').addEventListener('click', function() {
  const inputValue = document.getElementById('text-input').value
  alert(inputValue)
})



//8. Eventos en DOM

//Ejercicio 1:
//Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.
document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById('lista')
  // Obtener todos los elementos <li> dentro del contenedor ul
  const listItems = lista.getElementsByTagName('li')

  // Agregar un evento click a cada <li>
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
      console.log(listItems[i].textContent)
    });
  }
});

//Ejercicio 2
//Crea un campo de texto y un botón en una página HTML. Escribe un script que haga que el botón deshabilite el campo de texto cuando se haga clic en él. Luego, añade otro botón que vuelva a habilitar el campo de texto.
//Requisitos: al estar deshabilitado nuestro input no puede apretarse, no tiene hover y al habilitarse si

const campoTexto = document.getElementById('campoTexto')
const btnDeshabilitar = document.getElementById('btnDeshabilitar')
const btnHabilitar = document.getElementById('btnHabilitar')

// Función para deshabilitar el campo de texto
btnDeshabilitar.addEventListener('click', function () {
  campoTexto.disabled = true
  btnDeshabilitar.disabled = true
  btnHabilitar.disabled = false // Habilita el boton habilitar campo
});

// Funcion para habilitar el campo de texto
btnHabilitar.addEventListener('click', function () {
  campoTexto.disabled = false
  btnDeshabilitar.disabled = false
  btnHabilitar.disabled = true // Deshabilita el boton
});

//9. LocalStorage 
//Ejercicio 1:
//Crea un formulario con un campo para el correo electrónico. Escribe un script que guarde el correo en localStorage cuando el usuario envíe el formulario. si este existe muestralo en el dom debajo del input y tambien haz un botón de eliminar este elemento, al recargar la pagina este debe mostrarse si existe
document.addEventListener('DOMContentLoaded', function() {
  const emailDisplay = document.getElementById('email-display')
  const deleteButton = document.getElementById('delete-button')

  // Recupera el correo electrónico guardado del localStorage si existe
  const storedEmail = localStorage.getItem('email')
  if (storedEmail) {
    emailDisplay.textContent = `Correo electrónico guardado: ${storedEmail}`
    deleteButton.style.display = 'block'
  }

  // Maneja el envío del formulario
  document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault() // Evita que el formulario se envíe y la página se recargue
    const emailInput = document.getElementById('email-input')
    const email = emailInput.value

    // Guarda el correo electrónico en localStorage
    localStorage.setItem('email', email)

    // Muestra el correo electrónico guardado en el DOM
    emailDisplay.textContent = `Correo electrónico guardado: ${email}`
    deleteButton.style.display = 'block'
    emailInput.value = '' // Limpia el campo de texto
  })

  // Maneja la eliminación del correo electrónico
  deleteButton.addEventListener('click', function() {
    localStorage.removeItem('email')
    emailDisplay.textContent = ''
    deleteButton.style.display = 'none'
  })
})
