function addTask() {
    var taskText = document.getElementById('new-task').value;

    if (taskText.trim() !== '') {
        var taskList = document.getElementById('task-list');

        var taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        var taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            var editedText = prompt('Edit Task:', taskText);
            if (editedText !== null) {
                taskContent.textContent = editedText;
            }
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskDiv.remove();
        };

        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);

        document.getElementById('new-task').value = ''; 
    }
}