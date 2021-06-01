const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');
const image = document.querySelector('.image_box');

function createDiv(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = 'text';

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');
    

    let doneButton = document.createElement('button');
    doneButton.classList.add('doneButton');

    let editButton = document.createElement('button');
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    
    
    image.style.display = 'none';

    container.appendChild(itemBox);

    itemBox.appendChild(doneButton);
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    doneButton.addEventListener('click', () => {
      input.classList.add('completed');
      itemBox.classList.add('completed');
      editButton.disabled = true;
    });

    editButton.addEventListener('click', () => {
      input.disabled = !input.disabled;
    })

    

    removeButton.addEventListener('click', () => {
      itemBox.classList.add('fall');
      itemBox.addEventListener('transitionend', () => {
        itemBox.remove();
        const tasks = container.childNodes;
        if(!tasks.length) {
          image.style.display = 'flex';
        }
      })
    });
}

addButton.addEventListener('click', () => {
  if(input.value != '') {
    createDiv(input.value);
    input.value = '';
  } 
})

window.addEventListener('keydown', (e) => {
  if(e.code == 'Enter' && input.value != '') {
    createDiv(input.value);
    input.value = '';
  }
})













