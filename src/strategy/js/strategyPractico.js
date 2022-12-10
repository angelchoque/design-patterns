// Sirve cuando tengamos comportamientos que van a cambiar en un objeto en tiempo de ejecución

/**
 * * Examples:
 * - Listas (muchas condicionales)
 */

const data = [
  {
    name: "Erdinger Pikantus",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
    img: "dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png"
  },
  {
    name: "Corona",
    country: "México",
    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
    img: "upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG"
  },
  {
    name: "Delirium Tremens",
    country: "Bélgica",
    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
    img: "www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"

  }
]

class InfoContext {

  constructor(strategy, data, element) {
    this.setStrategy(strategy)
    this.data = data
    this.element = element
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  show() {
    this.strategy.show(this.data, this.element)
  }

}

class ListStrategy {

  show(data, element) {

    element.innerHTML = data.reduce((ac, i) => {

      return ac + `<div>
          <h2>${i.name}</h2>
          <p>${i.country}</p>
        </div>
      <hr>`

    }, "")

  }

}

class DetailedListStrategy {

  show(data, element) {

    element.innerHTML = data.reduce((ac, i) => {

      return ac + `<div>
          <h2>${i.name}</h2>
          <p>${i.country}</p>
          <p>${i.info}</p>
        </div>
      <hr>`

    }, "")

  }

}

class ListWithImageStrategy {

  show(data, element) {

    element.innerHTML = data.reduce((ac, i) => {

      return ac + `<div>
          <img width="10%" src="${i.img}" />
          <h2>${i.name}</h2>
        </div>
      <hr>`

    }, "")

  }

}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImageStrategy(),
]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()

slcOptions.addEventListener("change", (e) => {
  const op = e.target.value

  info.setStrategy(strategies[op])
  info.show()

})