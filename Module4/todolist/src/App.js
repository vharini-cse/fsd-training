import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TodoListDashboard from './components/TodoListDashboard';
import Actions from './components/Actions';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Learn HTML',
    'Learn CSS'
  ]);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <TodoListDashboard
              todos={todos}
              setTodos={setTodos}
            />
          }
        />

        <Route
          path="/actions"
          element={
            <Actions
              todos={todos}
              setTodos={setTodos}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;