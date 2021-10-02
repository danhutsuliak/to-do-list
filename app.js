const itemContainer = document.querySelector('.item-container');
const addBtn = document.querySelector('#add-item');

const addNewTask = (task) => {
  itemContainer.insertAdjacentHTML('beforeend', `<div class="item"><input type="checkbox" /><button>X</button></div>`);
  itemContainer.lastChild.insertAdjacentText('beforeend', task);

  // check listener
  itemContainer.lastChild.firstChild.addEventListener('change', (event) => {
    event.target.parentNode.classList.toggle('checked');
  })

  // delete listener
  itemContainer.lastChild.childNodes[1].addEventListener('click', (event) => {
    itemContainer.removeChild(event.target.parentNode);
    for (const key in localStorage) {
      if (event.target.parentNode.innerText == `X${localStorage[key]}`)
        localStorage.removeItem(key);
    }
    console.log(event.target.parentNode);
    if (!localStorage.length) {
      itemContainer.insertAdjacentHTML('afterbegin', '<p>Your To Do List is empty.<br><br>Make a task by cliking the button below!</p>')
    }
  })
}

if (localStorage.length) {
  for (const key in localStorage) {
    if (typeof localStorage[key] == 'string')
      addNewTask(localStorage[key]);
  }
} else {
  itemContainer.insertAdjacentHTML('afterbegin', '<p>Your To Do List is empty.<br><br>Add a task by clicking the button below!</p>')
}
addBtn.addEventListener('click', () => {
  const task = prompt('New Task');
  if (!localStorage.length) {
    itemContainer.firstChild.remove();
  }

  for (let i = 0; i <= localStorage.length; i++) {
    if (!localStorage[i]) {
      localStorage.setItem(i, task);
      break;
    } else {
      localStorage.setItem(localStorage.length, task);
      break
    }
  }

  console.log(localStorage);
  addNewTask(task);
})
