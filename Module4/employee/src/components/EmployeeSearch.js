import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeSearch({ employees }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.id.toString().includes(search)
  );

  return (
    <div className="employee-search">
      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Search by name or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search === '' ? (
        <p>Enter an employee name or ID to search.</p>
      ) : filteredEmployees.length === 0 ? (
        <p>No employee found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={() => navigate('/')}>
        Back to Employee List
      </button>
    </div>
  );
}

export default EmployeeSearch;