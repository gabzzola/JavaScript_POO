const OPEN_MODAL = document.getElementById('openModal')
const CLOSE_MODAL = document.getElementById('closeModal')
const MODAL = document.getElementById('modal')

OPEN_MODAL.addEventListener('click', () => {
  MODAL.classList.remove('invisible')
}) 

CLOSE_MODAL.addEventListener('click', () => {
  MODAL.classList.add('invisible')
  location.reload()
})

function erroGravacao() {
  const TITLE_ERROR = document.querySelector('#modal > div > h2')
  const P_ERROR = document.querySelector('#modal > div > p')

  TITLE_ERROR.textContent = 'Erro na gravação!'
  TITLE_ERROR.classList.add('text-red-500')
  P_ERROR.textContent = 'Existem campos obrigatórios que não foram preenchidos'
  CLOSE_MODAL.textContent = 'Voltar e corrigir'
  CLOSE_MODAL.classList.add('bg-red-500', 'hover:bg-red-700')
}

function sucessoGravacao() {
  const TITLE_SUCESS = document.querySelector('#modal > div > h2')
  const P_SUCESS = document.querySelector('#modal > div > p')

  TITLE_SUCESS.textContent = 'Registro salvo com sucesso!'
  TITLE_SUCESS.classList.add('text-green-500')
  P_SUCESS.textContent = 'A despesa foi cadastrada com sucesso!'
  CLOSE_MODAL.textContent = 'Voltar'
  CLOSE_MODAL.classList.add('bg-green-500', 'hover:bg-green-600')
}