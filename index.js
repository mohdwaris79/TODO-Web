// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim(); // remove extra spaces
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add click event to mark completed
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent marking completed when deleting
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
