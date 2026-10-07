import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProfileUpdate({ employees, setEmployees }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (employee) => employee.id.toString() === id
  );

  const [name, setName] = useState(employee ? employee.name : '');
  const [role, setRole] = useState(employee ? employee.role : '');
  const [email, setEmail] = useState(employee ? employee.email : '');
  const [department, setDepartment] = useState(
    employee ? employee.department : ''
  );

  const updateEmployee = () => {
    const updatedEmployees = employees.map((employee) =>
      employee.id.toString() === id
        ? {
            ...employee,
            name: name,
            role: role,
            email: email,
            department: department
          }
        : employee
    );

    setEmployees(updatedEmployees);

    navigate('/');
  };

  if (!employee) {
    return (
      <div>
        <h2>Employee not found</h2>
        <button onClick={() => navigate('/')}>
          Back to Employee List
        </button>
      </div>
    );
  }

  return (
    <div className="profile-update">
      <h2>Update Employee Profile</h2>

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Role</label>
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Department</label>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={updateEmployee}>
        Update Employee
      </button>

      <button onClick={() => navigate('/')}>
        Cancel
      </button>
    </div>
  );
}

export default ProfileUpdate;