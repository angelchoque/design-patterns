interface IComponent {
  getDetail(): string
}

class ProductComponent implements IComponent {

  protected name: string

  constructor( name: string ){
    this.name = name
  }

  public getDetail(): string {
    return `${this.name}`
  }

}

abstract class ProductDecorator implements IComponent {

  protected component: IComponent

  constructor(component: IComponent) {
    this.component = component
  }

  getDetail(): string {
    return this.component.getDetail()
  }

}

class ComercialInfoDecorator extends ProductDecorator {

  private tradename: string
  private brand: string

  constructor(component: IComponent, tradename: string, brand: string) {
    super(component)
    this.tradename = tradename
    this.brand = brand
  }

  getDetail(): string {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`
  }

}

class StoreProductDecorator extends ProductDecorator {

  private price: number

  constructor(component: IComponent, price: number) {
    super(component)

    this.price = price
  }

  getDetail(): string {
    return super.getDetail() + ` ${this.price}`
  }

}

class HTMLProductDecorator extends ProductDecorator {

  getDetail(): string {
    return `<h1>Info del producto</h1>
    <p>
      ${super.getDetail()}
    </p>`
  }

}

// Ejecución
// Component

const productComponent = new ProductComponent('Jeans')
console.log(productComponent.getDetail())

const commercialInfoProduct = new ComercialInfoDecorator(productComponent, 'DSS', 'SADE')
console.log(commercialInfoProduct.getDetail());

const storeProduct = new StoreProductDecorator(productComponent, 45)
console.log(storeProduct.getDetail())

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 45)
console.log(storeProduct2.getDetail())

const htmlProduct = new HTMLProductDecorator(storeProduct2)
console.log(htmlProduct.getDetail())


