// Profile.js
import React from "react";
import { useSelector } from "react-redux";
import img from "../assest/sep11.jpg"
const Profile = () => {
  const {user} = useSelector((state)=>state.auth)
  // const user = {
  //   name: "Varun",
  //   email: "varun@example.com",
  //   profilePicture: "https://www.example.com/profile.jpg", // Example image URL
  //   bio: "A passionate book lover and software developer.",
  //   location: "New York, USA",
  // };
 console.log(user,"profile");
 
  return (
    <div
    className="max-w-4xl mx-auto shadow-lg rounded-lg p-6 my-6 bg-opacity-90"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(10, 25, 47, 0.85)", // Dark Blue Overlay
    }}
  >
    <div className="flex flex-col items-center text-center mb-8">
      <img
        src={user.profilePicture}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-400 shadow-md"
      />
      <h2 className="text-3xl font-semibold text-white">{user.firstName}</h2>
      <p className="text-lg text-blue-300">{user.lastName}</p>
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-blue-200">Contact Information</h3>
      <p className="text-lg text-gray-300">
        <strong className="text-blue-400">Email:</strong> {user.email}
      </p>
      <p className="text-lg text-gray-300">
        <strong className="text-blue-400">Location:</strong> {user.location}
      </p>
    </div>
  </div>
  
  );
};

export default Profile;
