interface IListImplementor {
  elements: number[]

  add(number: number): void
  getElements(): number[]
}

class OrderedList implements IListImplementor {

  elements: number[] = [ ]

  public add(number: number): void {
    this.elements.push(number)
    this.elements.sort((a, b) => a - b)
  }

  public getElements(): number[] {
    return this.elements
  }

}

class UniqueList implements IListImplementor {

  elements: number[] = [ ]

  public add(number: number): void {
    if (!this.elements.includes(number)) {
      this.elements.push(number)
    }
  }

  public getElements(): number[] {
    return this.elements
  }

}

interface IDataAbstraction {
  implementor: IListImplementor

  add(number: number): void
  get(): number[]
  operation(fn: (n: number) => number): number[]
}

class DataRefinedAbstraction implements IDataAbstraction {

  implementor: IListImplementor

  constructor(implementor: IListImplementor) {
    this.implementor = implementor
  }

  add(number: number): void {
    this.implementor.add(number)
  }

  public get(): number[] {
    return this.implementor.getElements()
  }

  public operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn)
  }

}

const uniqueData = new DataRefinedAbstraction(new UniqueList())
const orderedData = new DataRefinedAbstraction(new OrderedList())

uniqueData.add(3)
uniqueData.add(3)
uniqueData.add(2)
uniqueData.add(1)

console.log(uniqueData.get())

orderedData.add(8)
orderedData.add(2)
orderedData.add(3)
orderedData.add(4)
orderedData.add(4)
orderedData.add(11)

console.log(orderedData.get())

const uniqueItems = uniqueData.operation((i) => i * 2)
const orderedItems = orderedData.operation((i) => i * 2)

console.log(uniqueItems)
console.log(orderedItems)