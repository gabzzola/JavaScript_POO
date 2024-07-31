class Sofa {
  constructor(cor, qtdLugares, reclinavel) {
    this.cor = cor
    this.qtdLugares = qtdLugares
    this.reclinavel = reclinavel
  }

  isReclinable() {
    return this.reclinavel ? 'é reclinável' : 'não é reclinável'
  }

  displayFeatures() {
    console.log(`O sofá é da cor ${this.cor}, possui ${this.qtdLugares} lugares e ${this.isReclinable()}.`)
  }
}

let sofa = new Sofa('marrom', 6, false)
sofa.displayFeatures()