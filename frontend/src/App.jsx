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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", formData);
      alert("User Registered");
      setFormData({ name: "", email: "", mobile: "", city: "" });
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      alert("User deleted");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search]);

  return (
    <div className="max-w-md mx-auto px-4 py-8 font-sans text-gray-800">

      <h2 className="text-xl font-semibold mb-4">User Registration</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm rounded px-4 py-2 w-fit"
        >
          Register
        </button>
      </form>

      <hr className="my-6 border-gray-200" />

      <h2 className="text-xl font-semibold mb-3">Search Users</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 text-sm w-full outline-none focus:border-blue-400 mb-4"
      />

      <div className="flex flex-col gap-3">
        {users.length === 0 && (
          <p className="text-sm text-gray-400">No users found.</p>
        )}
        {users.map((user) => (
          <div
            key={user._id}
            className="border border-gray-300 rounded p-3 text-sm"
          >
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.mobile}</p>
            <p className="text-gray-500">{user.city}</p>
            <button
              onClick={() => handleDelete(user._id)}
              className="mt-2 text-xs bg-red-600 rounded p-2 text-white cursor-pointer  "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;