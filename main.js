
const addButton = document.querySelector('.addButton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');
const image = document.querySelector('.image_box');

let localItems = JSON.parse(localStorage.getItem('localItem'));

function updateLocalStorage() {
  localStorage.setItem('localItem', JSON.stringify(taskList));
}

addButton.addEventListener('click', () => {
  if(input.value != '') {
    if(localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push({
      description: input.value,
      completed: false
    });
    updateLocalStorage();
  }
  input.value = '';
   showList();
})

function showList() {
  let task = '';
  let taskListShow = document.querySelector('.container');
 
  if(localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }
  taskList.forEach((data,index) => {
    task += `
    <div class = 'item'>
      <button class ='${data.completed ? 'doneButton' : 'notDoneButton'}' onClick = 'doneTask(${index})'></button>
      <div class='item_value'>
        <p class ='text ${data.completed ? 'completed' : ''}'>${data.description}</p>
      </div>
      <button class = 'removeButton' onClick = 'deleteItem(${index})'></button>
      </div>`
     
  });
  visibleImage();
  taskListShow.innerHTML = task;
 }
showList();

function doneTask(index) {
  let text = document.querySelectorAll('.text');
  
    taskList[index].completed = !taskList[index].completed;
    if(taskList[index].completed) {
      text[index].classList.add('completed'); 
    } else {
      text[index].classList.remove('completed');
    }
  updateLocalStorage();
  showList()
 
}

function deleteItem(index) {
  taskList.splice(index, 1);
  updateLocalStorage();
  showList();
}

function visibleImage() {
  if(!taskList.length) {
    image.style.display = 'flex';
  } else {
    image.style.display = 'none';
  }
}  










