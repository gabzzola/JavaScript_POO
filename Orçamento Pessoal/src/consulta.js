function carregarTabelaDespesas() {
  let arrayDespesas = Array()
  arrayDespesas = bdd.recuperarDespesas()
  
  const TABLE_DESPESAS = document.getElementById('tableDespesas')

  arrayDespesas.forEach(function (indice) {
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
  })
}