document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      // Optional: Add a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });
      listItem.appendChild(deleteBtn);

      taskList.appendChild(listItem);
      taskInput.value = ""; // Clear the input field
    }
  });

  // Optional: Load tasks from localStorage on page load
  // This would involve saving tasks as an array in localStorage and then rendering them.
});
