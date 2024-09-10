function carregarTabelaDespesas(despesas = Array(), filtrar = false) {
  if (despesas.length == 0 && !filtrar) {
    despesas = bdd.recuperarTodasDespesas()
  }
  
  const TABLE_DESPESAS = document.getElementById('tableDespesas')
  TABLE_DESPESAS.innerHTML = ''
  
  despesas.forEach(function (indice) {
    let row = TABLE_DESPESAS.insertRow()
    row.className = 'row-table'

    let cellData = row.insertCell(0)
    cellData.innerHTML = `${indice.day}/${indice.month}/${indice.year}`
    cellData.className = 'column-table'

    let cellType = row.insertCell(1)
    cellType.innerHTML = indice.type
    cellType.className = 'column-table'

    let cellDescription = row.insertCell(2)
    cellDescription.innerHTML = indice.description
    cellDescription.className = 'column-table'

    let cellPrice = row.insertCell(3)
    cellPrice.innerHTML = indice.price
    cellPrice.className = 'column-table'

    let buttonRemove = document.createElement('button')
    buttonRemove.innerHTML = '<i class="fas fa-times"></i>'
    buttonRemove.classList.add('btn-remove')
    buttonRemove.id = `Id_${indice.id}`
    buttonRemove.onclick = function() {
      let id = this.id.replace('Id_', '')
      bdd.removerDespesa(id)
      carregarTabelaDespesas()
    }
    row.insertCell(4).append(buttonRemove)
  })
}

function filtrarDespesa() {
  let day = document.getElementById('day').value
  let month = document.getElementById('month').value
  let year = document.getElementById('year').value
  let type = document.getElementById('type').value
  let description = document.getElementById('description').value
  let price = document.getElementById('price').value

  let despesa = new Despesa(day, month, year, type, description, price)

  let despesasFiltradas = bdd.filtrar(despesa)
  carregarTabelaDespesas(despesasFiltradas, true)
}