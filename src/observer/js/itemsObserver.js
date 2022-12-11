class Subject {

  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unSuscribe(observer) {
    this.observers = this.observers.filter(obs => observer !== obs)
  }

  notify(data) {
    this.observers.forEach(e => {
      e.refresh(data)
    })
  }

}

class ItemsSubject extends Subject {

  constructor() {
    super()
    this.data = []
  }

  add(item) {
    this.data.push(item)
    this.notify(this.data)
  }

}

class HTMLElementObs {

  constructor(element) {
    this.element = element
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((ac, e) => {
      return ac + `<p>${e}</p>`
    }, "")
  }

}

class Observer {

  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }

}

const items = new ItemsSubject()
const d1Obs = new HTMLElementObs(div1)
const d2Obs = new HTMLElementObs(div2)

const obs = new Observer((data) => {
  div3.innerHTML = data.length
})

items.subscribe(d1Obs)
items.subscribe(d2Obs)
items.subscribe(obs)

function add() {
  const name = txtName.value
  items.add(name)
}