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