class TaskPresenter {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.view.onAddTask(this.addTask.bind(this));
        this.view.onRemoveTask(this.removeTask.bind(this));
        this.view.onToggleTask(this.toggleTask.bind(this));
        this.updateView();
    }

    addTask(description) {
        if (description) {
            this.model.addTask(description);
            this.updateView();
        }
    }

    removeTask(taskId) {
        this.model.removeTask(taskId);
        this.updateView();
    }

    toggleTask(taskId) {
        this.model.toggleTask(taskId);
        this.updateView();
    }

    updateView() {
        this.view.displayTasks(this.model.getTasks());
    }
}
