class TaskPresenter {
    constructor(model) {
        this.model = model;
    }

    addTask(description) {
        this.model.addTask(description);
    }

    removeTask(taskId) {
        this.model.removeTask(taskId);
    }

    toggleTask(taskId) {
        this.model.toggleTask(taskId);
    }

    getTasks() {
        return this.model.getTasks();
    }
}

export default TaskPresenter;
