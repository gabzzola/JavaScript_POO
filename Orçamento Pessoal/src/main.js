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
    gravarDespesa(despesa)
    sucessoGravacao()
  } else {
    erroGravacao()
  }
}

function gravarDespesa(despesa) {
  let novoIndice = localStorage.length
  localStorage.setItem(novoIndice, JSON.stringify(despesa))
}