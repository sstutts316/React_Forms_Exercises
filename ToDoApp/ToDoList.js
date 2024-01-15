import React, { useState, useEffect } from 'react';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';

function ToDoList() {
  const [toDos, setToDos] = useState(() => {
    const savedToDos = localStorage.getItem('toDos');
    return savedToDos ? JSON.parse(savedToDos) : [];
  });

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = newToDo => {
    setToDos([...toDos, newToDo]);
  };

  const removeToDo = id => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const updateToDo = (id, updatedTask) => {
    const updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        return { ...toDo, task: updatedTask };
      }
      return toDo;
    });
    setToDos(updatedToDos);
  };

  return (
    <div className="ToDoList">
      <NewToDoForm addToDo={addToDo} />
      {toDos.map(toDo => (
        <ToDo
          key={toDo.id}
          id={toDo.id}
          task={toDo.task}
          removeTodo={removeToDo}
          updateTodo={updateToDo}
        />
      ))}
    </div>
  );
}

export default ToDoList;
