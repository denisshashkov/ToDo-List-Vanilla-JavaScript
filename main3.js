const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

addButton.addEventListener('click', () => {
  if(input.value != '') {
    addTask();
    input.value = '';
  }
});




function addTask() {
  const itemBox = document.createElement('div');
  itemBox.classList.add('item');

  const itemInput = document.createElement('input');
    itemInput.value = input.value;
    itemInput.disabled = true;
    itemInput.classList.add('item_input');
    itemInput.type = 'text';

  const doneButton = document.createElement('button');
    doneButton.classList.add('doneButton');

  const editButton = document.createElement('button');
    editButton.classList.add('editButton');

  const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');

  container.appendChild(itemBox);

  itemBox.appendChild(doneButton);
  itemBox.appendChild(itemInput);
  itemBox.appendChild(editButton);
  itemBox.appendChild(removeButton);  

  doneButton.addEventListener('click', () => {
    itemInput.classList.add('item_input-through');
    editButton.disabled = true;
    itemInput.disabled = !itemInput.disabled;
  });

  editButton.addEventListener('click', () => {
    itemInput.disabled = !itemInput.disabled;
  })

  removeButton.addEventListener('click', () => {
    container.removeChild(itemBox);
  });
}