import React from 'react'
import Btn from './Common/Btn'
import Badge from './Badge';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';

const Navbar = () => {
  const {user,isLoggedIn} = useSelector((state)=>state.auth)
  console.log(isLoggedIn,"login");
  
  const navigate =useNavigate()
  const dispatch = useDispatch();
  const logoutHandler =()=>{
    dispatch(logout)
    navigate("/login")
  }

  
  return (
    <div className="flex justify-between items-center p-6 bg-[#FDF8EE]">
    {/* Book Store Title */}
    <Link to="/"> <h3 className="text-3xl font-semibold text-[#333]">Book Store</h3></Link>
   
    
    {/* Navigation Menu */}
    <div className="flex gap-8">
      <ul className="flex list-none space-x-8">
        <Link className="text-lg text-[#333] hover:text-[#4b8dff] cursor-pointer transition duration-300" to='/'>Home</Link>
        <Link className="text-lg text-[#333] hover:text-[#4b8dff] cursor-pointer transition duration-300" to="/top">Top Rated</Link>
        <Link className="text-lg text-[#333] hover:text-[#4b8dff] cursor-pointer transition duration-300" to="/contect">Contect us</Link>
        <Link className="text-lg text-[#333] hover:text-[#4b8dff] cursor-pointer transition duration-300 " to='/books'>Books</Link>
      </ul>
    </div>
  
    {/* Sign in Button */}
    {isLoggedIn ? (
  <div className="flex items-center gap-4">
    <Link to="/profile">
      <Badge 
        text={user?.firstName || "Guest"} 
        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
      />
    </Link>
    <button 
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all" 
      onClick={logoutHandler}
    >
      Log out
    </button>
  </div>
):(
  <Btn text="Sign in" click="login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" />
)  }

</div>
 
  )
}

export default Navbar
