import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee({ employees, setEmployees }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const navigate = useNavigate();

  const addEmployee = () => {
    if (
      name.trim() === '' ||
      role.trim() === '' ||
      email.trim() === '' ||
      department.trim() === ''
    ) {
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name,
      role: role,
      email: email,
      department: department
    };

    setEmployees([...employees, newEmployee]);

    setName('');
    setRole('');
    setEmail('');
    setDepartment('');

    navigate('/');
  };

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter employee name"
      />

      <label>Role</label>
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Enter role"
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <label>Department</label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Enter department"
      />

      <button onClick={addEmployee}>
        Add Employee
      </button>
    </div>
  );
}

export default AddEmployee;