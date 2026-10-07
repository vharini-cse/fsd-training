import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeList({ employees, setEmployees }) {
  const navigate = useNavigate();

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);
  };

  return (
    <div className="employee-list">
      <h2>Employee Management System</h2>

      <h3>Employee List</h3>

      {employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>
                  <button
                    onClick={() => navigate(`/update/${employee.id}`)}
                  >
                    Update
                  </button>

                  <button
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={() => navigate('/add')}>
        Add Employee
      </button>

      <button onClick={() => navigate('/search')}>
        Search Employee
      </button>
    </div>
  );
}

export default EmployeeList;