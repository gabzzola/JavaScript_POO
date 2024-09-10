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
    this.indice = this.recuperarUltimoIndice() || 0
  }

  recuperarUltimoIndice() {
    return parseInt(localStorage.getItem('ultimoIndice')) || 0
  }

  atualizarUltimoIndice() {
    localStorage.setItem('ultimoIndice', this.indice)
  }

  gravarDespesa(despesa) {
    localStorage.setItem(this.indice, JSON.stringify(despesa))
    this.indice++
    this.atualizarUltimoIndice()
  }


  recuperarTodasDespesas() {
    let arrayTodasDespesas = Array()

    for (let i = 0; i < this.indice; i++) {
      let despesa = JSON.parse(localStorage.getItem(i))

      if (despesa != null) {
        despesa.id = i
        arrayTodasDespesas.push(despesa)
      }
    }

    return arrayTodasDespesas
  }

  filtrar(despesa) {
    let despesasFiltradas = Array()
    despesasFiltradas = this.recuperarTodasDespesas()

    if (despesa.day != '') {
      despesasFiltradas = despesasFiltradas.filter(indice => indice.day == despesa.day)
    }
    if (despesa.month != '') {
      despesasFiltradas = despesasFiltradas.filter(indice => indice.month == despesa.month)
    }
    if (despesa.year != '') {
      despesasFiltradas = despesasFiltradas.filter(indice => indice.year == despesa.year)
    }
    if (despesa.type != '') {
      despesasFiltradas = despesasFiltradas.filter(indice => indice.type == despesa.type)
    }
    if (despesa.description != '') {
      despesasFiltradas = despesasFiltradas.filter(indice => indice.description == despesa.description)
    }
    if (despesa.price != '') {
      despesasFiltradas = despesasFiltradas.filter(indice => indice.price == despesa.price)
    }

    return despesasFiltradas
  }

  removerDespesa(id) {
    localStorage.removeItem(id)
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