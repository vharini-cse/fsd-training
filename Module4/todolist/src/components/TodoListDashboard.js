import React from 'react';
import { useNavigate } from 'react-router-dom';

function TodoListDashboard({ todos, setTodos }) {
  const navigate = useNavigate();

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="dashboard">
      <h1>To Do List</h1>
      <h2>To Do List Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>ToDo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate('/actions')}>
        Add Todolist
      </button>
    </div>
  );
}

export default TodoListDashboard;