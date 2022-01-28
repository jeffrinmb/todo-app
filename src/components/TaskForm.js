import React from 'react';
import './TaskForm.css';
import { useInput } from '../hooks/useInput';

const TaskForm = ({ onSave, lastId }) => {
  const [taskProps, resetTask] = useInput('');
  const [dateProps, resetDate] = useInput('');

  const onSubmitHandler = event => {
    event.preventDefault();
    onSave({
      taskId: lastId + 1,
      taskDesc: taskProps.value,
      taskDate: dateProps.value,
      taskCompleted: 'N',
    });
    resetTask();
    resetDate();
  };

  return (
    <form onSubmit={onSubmitHandler} className="form-data">
      <label htmlFor="task-desc">Task</label>
      <textarea required {...taskProps} id="task-desc" rows="4" />
      <label htmlFor="task-date">Date</label>
      <input required {...dateProps} type="date" id="task-date" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
