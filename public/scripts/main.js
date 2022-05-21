import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", handleClick)
})

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".action a.delete")

deleteButton.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    //Pausar eventos com #
    event.preventDefault()


    //Marcar como lida opu excluir
    const text = check ? "Marcar como lida" : "Excluir"


    //Check ou delete para a rota
    const slug = check ? "check" : "delete"
    //Pegar o id da sala
    const roomId =document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id


    //Pegar form para colar rota para excluir ou marcar como lida = route.post('/room/:room/:question/:action')
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)



    //Mudar o titulo
    modalTitle.innerHTML = `${text} esta pergunta`
    //Mudar o p
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    //Mudar o button
    modalButton.innerHTML= `Sim, ${text.toLocaleLowerCase()}`
    //Mudar a cor do button
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    // Abrir modal
    modal.open()
}
