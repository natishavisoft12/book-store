import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import img2 from "../assest/rm347-baifernn-07.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profilePicture: null, // Store image file
    preview: "", // Store image preview URL
  });

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: file,
        preview: URL.createObjectURL(file), // Create preview URL
      });
    }
  };

  // Handle form submit
  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@example.com`,
      profilePicture: formData.preview, // Save preview URL (for now)
    };

    console.log(user, "login user");
    dispatch(login(user));
    navigate("/");

    // Clear form after login
    setFormData({ firstName: "", lastName: "", profilePicture: null, preview: "" });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 text-center">Login</h2>

        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center">
          {formData.preview && (
            <img
              src={formData.preview}
              alt="Profile Preview"
              className="w-24 h-24 object-cover rounded-full border-2 border-blue-400 shadow-md mb-2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Input Fields */}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your First Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your Last Name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
