class Drink {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  info(): string {
    return this.name
  }
}

const awa = new Drink("awa")
console.log(awa.info())

interface Product {
  price: number
  getPrice(): string
}

// Herencia
class Beer extends Drink implements Product { // para añadir mas interfaces se pone Product, Other
  private alcohol: number
  price: number

  constructor(name: string, alcohol: number, price: number) {
    super(name)
    this.alcohol = alcohol
    this.price = price
  }

  info() {
    return super.info() + " " + this.alcohol
  }

  getPrice(): string {
    return "$ " + this.price
  }

}

// Implementación de interface
class Snack implements Product {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  getPrice(): string {
    return "El precio es: $ " + this.price
  }
}

const beer = new Beer("unknown", 4.8, 50)
console.log("🚀 ~ ", beer.info())

const products: Product[] = [
  new Beer("oro", 4.5, 10),
  new Snack('dor', 2)
]

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice())
  }
}

getPrices(products)