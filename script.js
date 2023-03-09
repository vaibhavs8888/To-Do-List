// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Initialize task array
let tasks = [];

// Add event listener to add button
addButton.addEventListener("click", function() {
    if (taskInput.value !== "") {
        tasks.push(taskInput.value);
        displayTasks();
        taskInput.value = "";
    }
});

// Function to display tasks
function displayTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const listItem = document.createElement("li");
        const taskText = document.createElement("span");
        taskText.innerText = task;
        listItem.appendChild(taskText);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", function() {
            const newTask = prompt("Enter new task", task);
            if (newTask !== null && newTask !== "") {
              tasks[i] = newTask;
              displayTasks();
              }
              });
              listItem.appendChild(editButton);
              listItem.appendChild(deleteButton);
              taskList.appendChild(listItem);
              }
              }