class Form {

  constructor(controls, actions) {
    this.controls = controls
    this.action = actions
  }

  getContent() {
    return `<form method="POST" action="${this.action}" >
      ${this.controls.reduce((ac, c) => {
        return ac + `<div>
          ${this.getLabel(c)}
          ${this.getInput(c)}
        </div>`
      }, "")}
      <button>Enviar</button>
    </form>`
  }

  getLabel(control) {
    return `<label>${control.text}</label>`
  }

  getInput(control) {
    return `<input type="${control.type}" id="${control.name}" />`
  }

}

class FormBuilder {

  constructor() {
    this.reset()
  }

  reset() {
    this.action = ''
    this.controls = []
  }

  setAction(action) {
    this.action = action
    return this
  }

  setText(name, text) {
    this.controls.push({
      name,
      text,
      type: "text"
    })

    return this
  }

  setEmail(name, text) {
    this.controls.push({
      name,
      text,
      type: "email"
    })

    return this
  }

  setCheckbox(name, text) {
    this.controls.push({
      name,
      text,
      type: "checkbox"
    })

    return this
  }

  setColor(name, text) {
    this.controls.push({
      name,
      text,
      type: "color"
    })

    return this
  }

  build() {
    const form = new Form(this.controls, this.action)
    this.reset()
    return form
  }

}

class FormDirector {

  constructor(formBuilder) {
    this.setBuilder(formBuilder)
  }

  setBuilder() {
    this.formBuilder = formBuilder
  }

  createPeopleForm() {
    this.formBuilder.reset()
    this.formBuilder
      .setText('firstName', 'Nombre')
      .setText('lastName', 'Apellidos')
  }

  createContactForm() {
    this.formBuilder.reset()
    this.formBuilder
      .setText('name', 'Nombre del solicitante')
      .setEmail('email', 'Email')
      .setEmail('message', 'Mensaje')
  }

}

const formBuilder = new FormBuilder()

const formPeople = formBuilder
  .setAction("add.php")
  .setText("firstName", "Nombre")
  .setText("lastName", 'Apellidos')
  .setCheckbox('xd', 'are u gay?')
  .build()

const formPeople2 = formBuilder
  .setAction('send.php')
  .setText('name', 'Nombres')
  .setEmail('email', 'Email')
  .build()

form1.innerHTML = formPeople.getContent()
form2.innerHTML = formPeople2.getContent()

const director = new FormDirector(formBuilder)

director.createPeopleForm()

form3.innerHTML = formBuilder.build().getContent()

director.createPeopleForm()

form4.innerHTML = formBuilder.build().getContent()

director.createContactForm()

form5.innerHTML = formBuilder.build().getContent()