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
          <input type="text" class="form-control" required/>
          <label>Last Name</label>
          <input type="text" class="form-control" required/>
          <label>Department</label>
          <input type="dropdown" class="form-control" required/>
          <label>Address</label>
          <textarea rows="5" class="form-control" required></textarea>
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
