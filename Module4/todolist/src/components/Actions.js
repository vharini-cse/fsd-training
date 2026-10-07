import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Actions({ todos, setTodos }) {
  const [todo, setTodo] = useState('');
  const navigate = useNavigate();

  const addTodo = () => {
    if (todo.trim() === '') {
      return;
    }

    setTodos([...todos, todo]);
    setTodo('');
    navigate('/');
  };

  return (
    <div className="actions">
      <h1>To DO List App</h1>
      <h2>Add To Do</h2>

      <div>
        <label>To Do List </label>

        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>

      <button onClick={addTodo}>
        Add To Do
      </button>
    </div>
  );
}

export default Actions;