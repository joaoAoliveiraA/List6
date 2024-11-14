import React from 'react';
import TaskItem from './TaskItem';

const TaskView = ({ tasks, onAddTask, onRemoveTask, onToggleTask }) => {
    const [taskInput, setTaskInput] = React.useState('');

    const handleAddTask = () => {
        if (taskInput.trim()) {
            onAddTask(taskInput);
            setTaskInput('');
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
            <ul>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onRemoveTask={onRemoveTask}
                        onToggleTask={onToggleTask}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskView;
