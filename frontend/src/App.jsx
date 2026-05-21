import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      alert("User Registered");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
      });

      fetchUsers();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const fetchUsers = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/users/search?q=${search}`
    );

    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [search]);

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h2>Search Users</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.mobile}</p>
            <p>{user.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;