import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    department: "",
    address: "",
  });

  const [alert, setAlert] = useState(null);

  //using useEffect to hide alert
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  //handleChange constant to fill in the form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //handleSubmit checks if data is correct and passes all four checks, then publishes them to a table
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName) {
      setAlert({ type: "danger", message: "First Name is required" });
      return;
    }
    if (!form.lastName) {
      setAlert({ type: "danger", message: "Last Name is required" });
      return;
    }
    if (!form.department) {
      setAlert({ type: "danger", message: "Department is required" });
      return;
    }
    if (!form.address) {
      setAlert({ type: "danger", message: "Address is required" });
      return;
    }
    const newUser = {
      id: Date.now(),
      name: `${form.firstName} ${form.lastName}`,
      department: form.department,
      address: form.address,
    };

    setUsers([...users, newUser]);
    setForm({ firstName: "", lastName: "", department: "", address: "" });
    setAlert({ type: "success", message: "Data has been saved successfully" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Registration Form</h2>

      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control" name="firstName" value={form.firstName} onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input className="form-control" name="lastName" value={form.lastName} onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                >
                  <option value="">Please choose one</option>
                  <option>Finance</option>
                  <option>HR & Administration</option>
                  <option>IT</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary w-100">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-3">
            <div className="card-header bg-secondary"><strong>USER LIST</strong></div>
            <p></p>
            <table className="table mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Data not found
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.department}</td>
                      <td>{user.address}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;