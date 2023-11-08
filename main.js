const form = document.querySelector('form')
const formButton = document.querySelector('button')
const taskContainer = document.querySelector('.tasks')
let statusSpans;

formButton.onclick = (e) => {
  e.preventDefault()
  const title = document.querySelector('input[name=title]').value
  const content = document.querySelector('input[name=content').value
  if(title.trim() !== "" && content.trim() !== ""){
    createCard(title, content)
    form.reset()
  }
}


const createCard = (title, content) => {
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  const cardTitle = document.createElement('h2')
  const cardContent = document.createElement('p')
  const status = document.createElement('span')
  status.textContent = 'PENDIENTE'
  cardTitle.textContent = title
  cardContent.textContent = content
  card.appendChild(cardTitle)
  card.appendChild(cardContent)
  card.appendChild(status)
  card.setAttribute('data-component', 'tasks-container')
  card.setAttribute('data-role', 'task')
  card.setAttribute('data-order', taskContainer.childNodes.length)
  status.setAttribute('data-role', 'task-status')
  status.setAttribute('data-task', taskContainer.childNodes.length)
  taskContainer.appendChild(card)
  updateSpans()
  }


const updateSpans = () => {
  statusSpans = document.querySelectorAll('.card>span')
  statusSpans.forEach( (node) => {
    node.onclick = (e) => {
      const {textContent} = e.target
      if(textContent === 'PENDIENTE'){
        e.target.textContent = 'LISTO'
        e.target.style.color = 'green'
      }else{
        e.target.textContent = 'PENDIENTE'
        e.target.style.color = 'red'
      }
    }
})}
