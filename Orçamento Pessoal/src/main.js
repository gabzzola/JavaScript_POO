class Despesa {
  constructor(day, month, year, type, description, price) {
    this.day = day
    this.month = month
    this.year = year
    this.type = type
    this.description = description
    this.price = price
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
  
  console.log(despesa)
}

