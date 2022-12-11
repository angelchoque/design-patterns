// MAIN CLASS - component

class ProductComponent {

  constructor(name) {
    this.name = name
  }

  getDetail() {
    return this.name
  }

}

// decorador

class ProductDecorator {

  constructor(productComponent) {
    this.productComponent = productComponent
  }

  getDetail() {
    return this.productComponent.getDetail()
  }

}

class ComercialInfoProductDecorator extends ProductDecorator {

  constructor(productComponent, tradename, brand) {
    super(productComponent)

    this.tradename = tradename
    this.brand = brand
  }

  getDetail() {
    return `${this.tradename} ${this.brand}` + super.getDetail()
  }

}

class StoreProductDecorator extends ProductDecorator {

  constructor(productComponent, price) {
    super(productComponent)

    this.price = price
  }

  getDetail() {
    return super.getDetail() + " $:" + this.price
  }
}

class HTMLProductDecorator extends ProductDecorator {
  // cuando no se agrega mas campos no es necesario agregar super

  getDetail() {
    return `<h1>Información del producto</h1>
    <p>
      ${super.getDetail()}
    </p>`
  }

}

// Exec
// Component

const productComponent = new ProductComponent('Frutas')
console.log(productComponent.getDetail());

// decorator 1 with component

const comercialInfoProduct =
  new ComercialInfoProductDecorator(productComponent, 'Marca SAC', 'FRUIT')
console.log(comercialInfoProduct.getDetail())

// decorator 2 with component

const storeProduct = new StoreProductDecorator(productComponent, 10.4)
console.log(storeProduct.getDetail())

// decorator 2 with decorator 1
const product = new StoreProductDecorator(comercialInfoProduct, 10.5)
console.log(product.getDetail())

// decorator 3 with decorator 2 with decorator 1

const htmlProductDecorator = new HTMLProductDecorator(product)

myDiv.innerHTML = htmlProductDecorator.getDetail()