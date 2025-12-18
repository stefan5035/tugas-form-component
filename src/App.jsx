import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      setMessage('First name is required');
      return;
    }
    if (!lastName) {
      setMessage('Last Name is required');
      return;
    }
    if (!department) {
      setMessage('Department is required');
      return;
    }
    if (!address) {
      setMessage('Address is required');
      return;
    }
    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      department,
      address,
    };
    setUsers([...users, newUser]);
    setFirstName('');
    setLastName('');
    setDepartment('');
    setAddress('');
    setMessage('Data has been saved successfully');
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
    <div class="container">
      <div class="form-container">
        <h2>Registration Form</h2>
        {message && <div className="success">{message}</div>}
      </div>
      <div class="border">
        <form class="m-3" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" class="form-control mb-3" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <label>Last Name</label>
          <input type="text" class="form-control mb-3" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <label>Department</label>
          <select class="form-select mb-3" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option selected>Please choose one</option>
            <option value="Data Management">Data Management</option>
            <option value="Finance, HR, and Administration">Finance, HR, and Administration</option>
            <option value="Product Development and Operation">Product Development and Operation</option>
          </select>
          <label>Address</label>
          <textarea rows="3" class="form-control mb-3" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="border">
        <p><strong>USER LIST</strong></p>
        <table class="table">
           <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
        <tbody class="table-group-divider">
            {users.length === 0 ? (
              <tr>
                <td colSpan="5">Data not found</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.department}</td>
                  <td>{user.address}</td>
                  <td>
                    <button class="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
      
    </>
  )
}

export default App;
