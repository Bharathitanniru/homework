// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Create an array to store tasks
let tasks = [];

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const newTask = taskInput.value;
    if (newTask !== "") {
        tasks.push(newTask);
        taskInput.value = "";
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
// Function to edit a task
function editTask(index) {
    const updatedTask = prompt("Edit the task:", tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        displayTasks();
    }
}

// Updated function to display tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}


// Event listener for adding a task
addTaskButton.addEventListener("click", addTask);


// Initial display
displayTasks();
