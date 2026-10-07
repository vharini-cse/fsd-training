import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import ProfileUpdate from './components/ProfileUpdate';
import EmployeeSearch from './components/EmployeeSearch';

import './App.css';

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 101,
      name: 'Harini',
      role: 'Software Developer',
      email: 'harini@example.com',
      department: 'IT'
    },
    {
      id: 102,
      name: 'Rahul',
      role: 'HR Manager',
      email: 'rahul@example.com',
      department: 'HR'
    }
  ]);

  return (
    <BrowserRouter>
      <Routes>

        {/* Employee List */}
        <Route
          path="/"
          element={
            <EmployeeList
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

        {/* Add Employee */}
        <Route
          path="/add"
          element={
            <AddEmployee
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

        {/* Search Employee */}
        <Route
          path="/search"
          element={
            <EmployeeSearch
              employees={employees}
            />
          }
        />

        {/* Update Employee */}
        <Route
          path="/update/:id"
          element={
            <ProfileUpdate
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;