const itemContainer = document.querySelector('.item-container');
const items = document.querySelectorAll('.item');
const addBtn = document.querySelector('#add-item');

const addNewTask = (task) => {
  itemContainer.insertAdjacentHTML('beforeend', `<div class="item"><input type="checkbox" /><button>X</button></div>`);
  itemContainer.lastChild.insertAdjacentText('beforeend', task);
  itemContainer.lastChild.firstChild.addEventListener('change', (event) => {
    event.target.parentNode.classList.toggle('checked');
  })
  itemContainer.lastChild.childNodes[1].addEventListener('click', (event) => {
    itemContainer.removeChild(event.target.parentNode);
  })
}

items.forEach(item => {
  const checkbox = item.querySelector('input');
  const deleteBtn = item.querySelector('button');

  checkbox.addEventListener('change', () => {
    item.classList.toggle('checked');
  })

  deleteBtn.addEventListener('click', (event) => {
    itemContainer.removeChild(event.target.parentNode);
  })
});

addBtn.addEventListener('click', () => {
  const task = prompt('New Task');

  addNewTask(task);
})
