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

// Herencia
class Beer extends Drink {
  private alcohol: number
  constructor(name: string, alcohol: number) {
    super(name)
    this.alcohol = alcohol
  }

  info() {
    return super.info() + " " + this.alcohol
  }

}

const beer = new Beer("unknown", 4.8)
console.log("🚀 ~ ", beer.info())
