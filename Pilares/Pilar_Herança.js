class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }

  informacoes() {
    console.log(`A marca do veículo é ${this.marca} e o modelo é ${this.modelo}.`)
  }
}

class Carro extends Veiculo {
  constructor(portas, marca, modelo) {
    super(marca, modelo)
    this.portas = portas
  }

  informacoes() {
    console.log(`Este carro tem ${this.portas} portas, a sua marca é ${this.marca} e o modelo é ${this.modelo}.`)
  }
}

class Moto extends Veiculo {
  constructor(cilindradas, marca, modelo) {
    super(marca, modelo)
    this.cilindradas = cilindradas
  }

  informacoes() {
    console.log(`Esta moto tem ${this.cilindradas} cilindradas, a sua marca é ${this.marca} e o modelo é ${this.modelo}.`)
  }
}

let carro = new Carro(4, 'Fiat', 'Uno')
carro.informacoes()

let moto = new Moto(755, 'Honda', 'Hornet')
moto.informacoes()
