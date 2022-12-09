// PARADIGMA FUNCIONAL: PRINCIPIOS
// Js tiene el paradigma funcional parcialmente

// Que es una función de primer orden?:
/* -> Es toda función que puede ser tratada como una variable */
// puede guardar, ejecutar y puede ser enviada como parámetro a otra función

function suma (a, b) {
  return a + b
}

let res = suma(1, 2)
console.log(res)

const fSum = suma // guardar función
res = fSum(5,4) // -> función de primer orden
console.log(res)


// FUNCIÓN DE ORDEN SUPERIOR
// Una función de orden superior es toda función que puede recibir como parámetro otras funciones

function operation(fn, a ,b) {
  console.log('hace algo')
  console.log(fn(a, b))
}

operation(suma, 10, 20)


// ARROW FUNCTION
// let fA = () => console.log('Algo')

// fA()

operation((a, b) => a * b, 5, 5)

// FOR EACH <- inmutable
const names = ["Juan", "Pedro", "Maria", "Julia"]

names.forEach((name) => {
  console.log(name)
})

names.forEach((name) => {
  console.log(name.toUpperCase())
})

console.log(names);
names.sort() // <- Método mutable: modifica el elemento original
console.log(names);

// MAP <- inmutable
const namesUpper = names.map((name) => name.toUpperCase())
console.log("🚀 ~", namesUpper)
console.log("🚀 ~", names)

// REDUCE
const numbers = [1, 2, 3, 4, 5]
const total = numbers.reduce((ac, number) => ac + number, 0) // 0: valor inicial

console.log(total)

// PROGRAMACIÓN ORIENTADA A OBJETO: POO
// CLASE

class Drink {

  // constructor se ejecuta al momento de crear la clase
  constructor(name) {
    this.name = name
  }

  info() {
    return "La bebida es: " + this.name
  }
}

// Función

function DrinkFn(name) {
  this.name = name
  this.info = function () {
    return "La bebida es: " + this.name
  }
}

const drink = new Drink("Vino")
console.log("🚀 ~ ", drink.info())

const drinkFn = new DrinkFn("awa")
console.log("🚀 ~ ", drinkFn.info())