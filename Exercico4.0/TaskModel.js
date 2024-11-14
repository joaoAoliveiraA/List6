class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(taskDescription) {
        const newTask = { id: Date.now(), description: taskDescription, completed: false };
        this.tasks.push(newTask);
        return newTask;
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    toggleTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }

    getTasks() {
        return this.tasks;
    }
}

export default TaskModel;
