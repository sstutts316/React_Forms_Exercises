import React, { useState } from 'react';

function ToDo({ id, task, removeToDo, updateToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = e => {
    e.preventDefault();
    updateToDo(id, editTask);
    setIsEditing(false);
  };

  return (
    <div className="ToDo">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editTask}
            onChange={e => setEditTask(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span className="ToDo-task">{task}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => removeToDo(id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ToDo;
