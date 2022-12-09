// SINGLETON: hacer que solo exista si por si una instancia, objeto de una clase (de un tipo)

// :_> Los patrones de diseño son técnicas para llevar un fin, un objetivo

class Singleton {

  static getInstance() {
    return Singleton.instance
  }

  constructor() {
    // evaluar un elemento estático
    this.random = Math.random() // this <- le pertenece al objeto

    if (Singleton.instance) { // Singleton <- le pertenece a la clase (estático)
      return Singleton.instance
    }

    Singleton.instance = this
  }
}

const singleton = new Singleton()
const singleton2 = new Singleton()
const singleton3 = Singleton.getInstance()

console.log("🚀 ~ ", singleton.random)
console.log("🚀 ~ ", singleton2.random)

console.log(singleton === singleton2);
console.log(singleton3 === singleton2);