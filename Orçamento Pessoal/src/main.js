class Despesa {
  constructor(day, month, year, type, description, price) {
    this.day = day
    this.month = month
    this.year = year
    this.type = type
    this.description = description
    this.price = price
  }

  validarDados() {
    for (let i in this) {
      if (!this[i]) {
        return false
      }
    }
    return true
  }
}

class BancoDeDados {
  constructor() {
    this.indice = localStorage.length
  }

  gravarDespesa(despesa) {
    localStorage.setItem(this.indice, JSON.stringify(despesa))
    this.indice++
  }

  recuperarDespesas() {
    let arrayDespesas = Array()

    for (let i = 0; i < this.indice; i++) {
      let despesa = JSON.parse(localStorage.getItem(i))

      if (despesa != null) {
        arrayDespesas.push(despesa)
      }
    }

    return arrayDespesas
  }
}

let bdd = new BancoDeDados()

function cadastrarDespesa() {
  let day = document.getElementById('day').value
  let month = document.getElementById('month').value
  let year = document.getElementById('year').value
  let type = document.getElementById('type').value
  let description = document.getElementById('description').value
  let price = document.getElementById('price').value

  let despesa = new Despesa(
    day, 
    month, 
    year, 
    type, 
    description, 
    price
  )

  if (despesa.validarDados()) {
    bdd.gravarDespesa(despesa)
    sucessoGravacao()
  } else {
    erroGravacao()
  }
}