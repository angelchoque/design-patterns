class Person {

  private name: string
  private lastName: string
  private age: number
  private country: string
  private city: string
  private hobbies: string[];

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.hobbies = hobbies
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`
  }

}

interface IPersonBuilder {
  name: string
  lastName: string
  age: number
  country: string
  city: string
  hobbies: string[]

  setName(name: string): IPersonBuilder
  setLastName(lastName: string): IPersonBuilder
  setAge(age: number): IPersonBuilder
  setCountry(country: string): IPersonBuilder
  setCity(city: string): IPersonBuilder
  addHobby(hobby: string): IPersonBuilder
  build(): Person
}

class NormalPersonBuilder implements IPersonBuilder {

  name: string
  lastName: string
  age: number
  country: string
  city: string
  hobbies: string[];

  constructor() {
    this.name = ''
    this.lastName = ''
    this.age = 0
    this.country = ''
    this.city = ''
    this.hobbies = []
  }

  reset(): void {
    this.name = ''
    this.lastName = ''
    this.age = 0
    this.country = ''
    this.city = ''
    this.hobbies = []
  }

  setName(name: string): IPersonBuilder {
    this.name = name
    return this
  }

  setLastName(lastName: string): IPersonBuilder {
    this.lastName = lastName
    return this
  }

  setAge(age: number): IPersonBuilder {
    this.age = age
    return this
  }

  setCountry(country: string): IPersonBuilder {
    this.country = country
    return this
  }

  setCity(city: string): IPersonBuilder {
    this.city = city
    return this
  }

  addHobby(hobby: string): IPersonBuilder {
    this.hobbies.push(hobby)
    return this
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    )

    this.reset()

    return person
  }

}

class PersonDirector {

  private personBuilder: IPersonBuilder

  constructor(personBuilder: IPersonBuilder) {
    this.personBuilder = personBuilder
  }

  setPersonBuilder(personBuilder: IPersonBuilder) {
    this.personBuilder = personBuilder
  }

  createSimplePerson(name: string, lastName: string) {
    this.personBuilder.setName(name).setLastName(lastName)
  }

}

const personBuilder = new NormalPersonBuilder()

const hector = personBuilder
  .setName('Hector')
  .setLastName('Di lion')
  .addHobby('eat')
  .addHobby('drink')
  .build()

console.log(hector);

const yuan = personBuilder
  .setName('Yuan')
  .setLastName('nauy')
  .setAge(23)
  .setCity('Jp')
  .setCountry('JP')
  .build()

console.log(yuan);

const director = new PersonDirector(personBuilder)

director.createSimplePerson('Pedro', 'JS')

const pedroJS = personBuilder.build()

console.log(pedroJS)


