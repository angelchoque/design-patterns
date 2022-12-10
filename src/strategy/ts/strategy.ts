interface Strategy {
  login(user: string, password: string): boolean
}

class LoginContext {

  private strategy: Strategy

  constructor(strategy: Strategy) {
    // this.setStrategy(strategy)
    this.strategy = strategy
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }

}

class LoginDBStrategy implements Strategy {

  login(user: string, password: string): boolean {
    console.log("DB CONNECT")

    if (user === "ADMIN" && password === "passwd") return true

    return false
  }

}

class LoginServiceStrategy implements Strategy {

  login(user: string, password: string): boolean {
    console.log("SERVICE AUTH")

    if (user === "ADMIN" && password === "passwd") return true

    return false
  }

}

class LoginGoogleStrategy implements Strategy {

  login(user: string, password: string): boolean {
    console.log("GOOGLE AUTH")

    if (user === "ADMIN" && password === "passwd") return true

    return false
  }

}

const auth = new LoginContext(new LoginDBStrategy())

const res = auth.login("ADMIN", "passwd")
console.log("🚀 ~ ", res)

auth.setStrategy(new LoginServiceStrategy())
auth.login("ADMIN", "passwd")

auth.setStrategy(new LoginGoogleStrategy())
auth.login("ADMIN", "passwd")