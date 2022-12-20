class DocumentContext {

  constructor() {
    this.content = ""
    this.state = new BlankState()
  }

  setState(state) {
    this.state = state
  }

  write(text) {
    this.state.write(this, text)
  }

}

class BlankState {

  write(documentContext, text) {
    documentContext.content = text
    documentContext.setState(new WithContentState())
  }

}

class WithContentState {

  write(documentContext, text) {
    documentContext.content += " " + text
  }

}

class ApprovedState {

  write(documentContext, text) {
    // new trow exp
    console.log("Documento aprobado ya no se modifica")
  }

}

const documentContext = new DocumentContext()
console.log(documentContext.state);
documentContext.write("pato")
console.log(documentContext.content);
console.log(documentContext.state);
documentContext.write("New")
documentContext.write("Text")
console.log(documentContext.content);

documentContext.setState(new ApprovedState())
console.log(documentContext.state);
documentContext.write('otro texto')

documentContext.setState(new WithContentState())
console.log(documentContext.state);
documentContext.write("si se puede cambiar")
console.log(documentContext.content);