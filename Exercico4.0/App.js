import React from 'react';
import TaskModel from './models/TaskModel';
import TaskView from './components/TaskView';
import TaskPresenter from './presenters/TaskPresenter';

const App = () => {
    const model = new TaskModel();
    const presenter = new TaskPresenter(model);

    const [tasks, setTasks] = React.useState(presenter.getTasks());

    const handleAddTask = (taskDescription) => {
        presenter.addTask(taskDescription);
        setTasks(presenter.getTasks());
    };

    const handleRemoveTask = (taskId) => {
        presenter.removeTask(taskId);
        setTasks(presenter.getTasks());
    };

    const handleToggleTask = (taskId) => {
        presenter.toggleTask(taskId);
        setTasks(presenter.getTasks());
    };

    return (
        <TaskView
            tasks={tasks}
            onAddTask={handleAddTask}
            onRemoveTask={handleRemoveTask}
            onToggleTask={handleToggleTask}
        />
    );
};

export default App;
