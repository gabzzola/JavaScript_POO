class Mamifero {
  constructor(cor, tamanho, peso) {
    this.cor = cor
    this.tamanho = tamanho
    this.peso = peso
  }

  informacoes(cor, tamanho, peso) {
    console.log(`Este mamífero é da cor ${this.cor}, mede ${this.tamanho} metros e pesa ${this.peso} kg.`)
  }

  respirar() {
    console.log('Este animal respira ar através dos pulmões.')
  }

  locomover() {
    throw new Error('Este método deve ser implementado pelas subclasses!')
  }
}

class MamiferoTerrestre extends Mamifero {
  constructor(cor, tamanho, peso) {
    super(cor, tamanho, peso)
  }

  locomover() {
    console.log('Este animal locomove-se sobre a terra.')
  }
} 

class MamiferoAquatico extends Mamifero {
  constructor(cor, tamanho, peso) {
    super(cor, tamanho, peso)
  }

  locomover() {
    console.log('Este animal locomove-se na água.')
  }
}

let elefante = new MamiferoTerrestre('Marrom', 3.5, 5750)
elefante.informacoes()
elefante.locomover()

let golfinho = new MamiferoAquatico('Cinza', 2, 230)
golfinho.informacoes()
golfinho.locomover()