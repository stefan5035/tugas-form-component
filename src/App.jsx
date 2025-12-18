import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
 
  return (
    <>
    <div class="container">
      <div class="form-container mt-3">
        <h2>Registration Form</h2>
      </div>
      <div>
        <form>
          <label>First Name</label>
          <input type="text" class="form-control mb-3" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <label>Last Name</label>
          <input type="text" class="form-control mb-3" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <label>Department</label>
          <select class="form-select mb-3" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option selected>Please choose one</option>
            <option value="data">Data Management</option>
            <option value="admin">Finance, HR, and Administration</option>
            <option value="pdo">Product Development and Operation</option>
          </select>
          <label>Address</label>
          <textarea rows="5" class="form-control mb-3" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="table-container">
        <h2>Users List</h2>
        <table>
           <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Department</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
        <tbody>
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
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
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

export default App
