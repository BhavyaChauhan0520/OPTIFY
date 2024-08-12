const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Add task function
function addTask(task) {
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
renderTasks();
}

// Remove task function
function removeTask(index) {
tasks.splice(index, 1);
localStorage.setItem('tasks', JSON.stringify(tasks));
renderTasks();
}

// Mark task as completed function
function completeTask(index) {
tasks[index].completed = true;
localStorage.setItem('tasks', JSON.stringify(tasks));
renderTasks();
}

// Render tasks function
function renderTasks() {
taskList.innerHTML = '';
tasks.forEach((task, index) => {
const taskElement = document.createElement('li');
const taskText = document.createElement('span');
taskText.textContent = task.name;
if (task.completed)
{
taskText.classList.add('completed');
}
const completeBtn = document.createElement('button');
completeBtn.textContent = 'Complete';
completeBtn.classList.add('complete-btn');
completeBtn.addEventListener('click', () => completeTask(index));
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.classList.add('remove-btn');
removeBtn.addEventListener('click', () => removeTask(index));
taskElement.appendChild(taskText);
taskElement.appendChild(completeBtn);
taskElement.appendChild(removeBtn);
taskList.appendChild(taskElement);
});
}

// Add task event listener
addTaskBtn.addEventListener('click', () => {
const task = taskInput.value.trim();
if (task)
{
addTask({ name: task, completed: false });
taskInput.value = '';
}
});

// Render tasks on page load
renderTasks();
