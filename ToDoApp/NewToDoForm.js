import React, { useState } from 'react';

function NewToDoForm({ addToDo }) {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addToDo({ id: Date.now(), task });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default NewToDoForm;
