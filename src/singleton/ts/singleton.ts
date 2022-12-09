class SingletonTS {
  private static instance: SingletonTS

  // class: default public
  public random: number

  private constructor() {
    this.random = Math.random()
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS()
    }

    return this.instance
  }
}

const singleton = SingletonTS.getInstance()
const singleton2 = SingletonTS.getInstance()

console.log("🚀 ~ ", singleton.random)
console.log("🚀 ~ ", singleton2.random)

singleton.random = 69

console.log("🚀 ~ ", singleton.random) // OUTPUT: 69 -> es el mismo objeto
console.log("🚀 ~ ", singleton2.random) // OUTPUT: 69 -> es el mismo objeto


