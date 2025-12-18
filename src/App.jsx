import { useState } from 'react'

function App() {
  
  return (
    <>
    <div class="container">
      <div class="content mt-3">
        <h2>Registration Form</h2>
      </div>
      <div>
        <form>
          <label>First Name</label>
          <input type="text" class="form-control mb-3" required/>
          <label>Last Name</label>
          <input type="text" class="form-control mb-3" required/>
          <label>Department</label>
          <select class="form-select mb-3" required>
            <option selected>Please choose one</option>
            <option value="data">Data Management</option>
            <option value="admin">Finance, HR, and Administration</option>
            <option value="pdo">Product Development and Operation</option>
          </select>
          <label>Address</label>
          <textarea rows="5" class="form-control mb-3" required></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div>
        <table></table>
      </div>
    </div>
      
    </>
  )
}

export default App
