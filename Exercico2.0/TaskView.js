class TaskView {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.taskList = document.getElementById('taskList');
        this.addButton = document.getElementById('addButton');
    }

    displayTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.description;
            if (task.completed) {
                taskItem.style.textDecoration = 'line-through';
            }

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => {
                this.onRemoveTask(task.id);
            };

            const toggleButton = document.createElement('button');
            toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
            toggleButton.onclick = () => {
                this.onToggleTask(task.id);
            };

            taskItem.appendChild(removeButton);
            taskItem.appendChild(toggleButton);
            this.taskList.appendChild(taskItem);
        });
    }

    getTaskInput() {
        return this.taskInput.value;
    }

    clearTaskInput() {
        this.taskInput.value = '';
    }

    onAddTask(callback) {
        this.addButton.onclick = () => {
            callback(this.getTaskInput());
            this.clearTaskInput();
        };
    }

    onRemoveTask(callback) {
        this.onRemoveTask = callback;
    }

    onToggleTask(callback) {
        this.onToggleTask = callback;
    }
}

