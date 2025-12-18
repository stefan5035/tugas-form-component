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
    <div class="container col-auto">
      <div class="form-container justify-content-center mt-3 col-sm-auto">
        <h2>Registration Form</h2>
      </div>
      <div class="d-flex-cols border col-4">
        <form class="m-3">
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
          <textarea rows="3" class="form-control mb-3" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="border d-flex-col col-8">
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
