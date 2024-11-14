import React from 'react';

const TaskItem = ({ task, onRemoveTask, onToggleTask }) => {
    return (
        <li>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.description}
            </span>
            <button onClick={() => onToggleTask(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onRemoveTask(task.id)}>Remove</button>
        </li>
    );
};

export default TaskItem;
