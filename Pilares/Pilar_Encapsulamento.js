class ContaBancaria {
  #saldo
  constructor() {
    this.#saldo = 0
  }

  consultarSaldo() {
    console.log(`O valor do saldo atual é de ${this.#saldo} reais.`)
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor
    } else {
      console.log('O valor informado é menor que zero.')
    }
  }

  sacar(valor) {
    if (valor > 0 && this.#saldo >= valor) {
      this.#saldo -= valor
    } else {
      console.log('O valor de saque é inválido.')
    }
  }
}

let usuario = new ContaBancaria()
usuario.consultarSaldo()
usuario.depositar(60)
usuario.sacar(20)
usuario.consultarSaldo()