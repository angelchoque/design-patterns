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