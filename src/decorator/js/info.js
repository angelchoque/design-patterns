// component
class ClientComponent {

  constructor(url) {
    this.url = url
  }

  async getData() {
    const res = await fetch(this.url)
    const data = await res.json()

    return data
  }

}

// decorator
class ClientDecorator {

  constructor(clientComponent) {
    this.clientComponent = clientComponent
  }

  async getData() {
    return await this.clientComponent.getData()
  }

}

// decorator 1
class UpperCaseClientDecorator extends ClientDecorator {

  async getData() {
    const data = await super.getData()
    const newData = data.map(d => {
      d.title = d.title.toUpperCase()
      return d
    })

    return newData
  }

}

// decorator 2
class HTMLClientDecorator extends ClientDecorator {

  async getData() {
    const data = await super.getData()
    const newData = data.map(d => {
      d.title = `<h1>${d.title}</h1>`
      d.thumbnailUrl = `<img src="${d.thumbnailUrl}"/>`
      return d
    })

    return newData
  }

}

//IIFE
(async () => {

  const url = "https://jsonplaceholder.typicode.com/photos"

  const client = new ClientComponent(url)
  const data = await client.getData()
  console.log("🚀 ~ file: info.js:51 ~ data", data)

  const upperClient = new UpperCaseClientDecorator(client)
  const data2 = await upperClient.getData()
  console.log("🚀 ~ file: info.js:54 ~ upperClient", data2)

  const htmlClient = new HTMLClientDecorator(upperClient)
  const data3 = await htmlClient.getData()

  divContent1.innerHTML = data3.reduce((ac, e) => {
    return ac + e.title + e.thumbnailUrl
  }, '')

  const htmlClient2 = new HTMLClientDecorator(client)
  const data4 = await htmlClient2.getData()

  divContent2.innerHTML = data4.reduce((ac, e) => {
    return ac + e.title + e.thumbnailUrl
  }, '')

})()