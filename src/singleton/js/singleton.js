// SINGLETON: hacer que solo exista si por si una instancia, objeto de una clase (de un tipo)

// :_> Los patrones de diseño son técnicas para llevar un fin, un objetivo

// Singleton: (creacional): una estructura para crear objetos
// Calendario - días de la semana (no cambia)

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

class WeekDays {
  daysEs = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ]

  daysEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  constructor(lang) {
    this.lang = lang

    if (WeekDays.instance) {
      return WeekDays.instance
    }

    WeekDays.instance = this
  }

  getDays() {
    return this.lang === 'es' ? this.daysEs : this.daysEn
  }
}

const weekDays = new WeekDays("es")
const weekDays2 = new WeekDays()
console.log("🚀 ~ ", weekDays.getDays())
console.log("🚀 ~ ", weekDays2.getDays())

// singleton se ve en inyección de dependencias