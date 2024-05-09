function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        li.onclick = function() {
            li.classList.toggle("complete");
        };
        taskList.appendChild(li);
        taskInput.value = "";
    }
}