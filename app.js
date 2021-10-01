const itemContainer = document.querySelector('.item-container');
let items = [];
const addBtn = document.querySelector('#add-item');

const addNewTask = (task) => {
  itemContainer.insertAdjacentHTML('beforeend', `<div class="item" id=${localStorage.length - 1}><input type="checkbox" /><button>X</button></div>`);
  itemContainer.lastChild.insertAdjacentText('beforeend', task);

  // check listener
  itemContainer.lastChild.firstChild.addEventListener('change', (event) => {
    event.target.parentNode.classList.toggle('checked');
  })

  // delete listener
  itemContainer.lastChild.childNodes[1].addEventListener('click', (event) => {
    itemContainer.removeChild(event.target.parentNode);
    localStorage.removeItem(event.target.parentNode.id);
    if (!localStorage.length) {
      itemContainer.insertAdjacentHTML('afterbegin', '<p>Your To Do List is empty. Make a task by cliking the button below!</p>')
    }
  })
}

if (localStorage.length) {
  for (let i = 0; i < localStorage.length; i++) {
    addNewTask(localStorage.getItem(i));
  }
} else {
  itemContainer.insertAdjacentHTML('afterbegin', '<p>Make your first To Do!</p>')
}

addBtn.addEventListener('click', () => {
  const task = prompt('New Task');
  if (!localStorage.length) {
    itemContainer.firstChild.remove();
  }

  localStorage.setItem(localStorage.length, task);
  console.log(localStorage);
  addNewTask(task);
})

