 /* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/users";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setdropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async ()=>{
    try{
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    }
    catch (err){
      console.error(err)
    }
  }

  return (
  
  <div className="fixed bottom-1  ml-[87%] transform -translate-x-1/2 z-50 bg-[#0f0f0f] border w-[25%] px-[2rem] py-[1rem] rounded">
  <section className="flex justify-between items-center">
    {/* Section 1 - Navigation Links */}
    <div className="flex items-center">
      <Link to="/" className="flex items-center transition-transform ">
        <AiOutlineHome className="mr-2 text-white hover:text-teal-500 cursor-pointer" size={26}  />
        <span className="hidden nav-item-name">Home</span>
      </Link>

      <Link to="/movies" className="flex items-center transition-transform  ml-4">
        <MdOutlineLocalMovies  size={26} className=" mr-2 text-white hover:text-teal-500 cursor-pointer" />
        <span className="hidden nav-item-name">Shop</span>
      </Link>
    </div>

    {/* Section 2 - User Info and Dropdown */}
    <div className="relative bottom-0.5">
      <button className="text-gray-800 focus:outline-none" onClick={toggleDropdown}>
        {userInfo ? (
          <span className="text-white">{userInfo.username}</span>
        ) : null}

        {userInfo && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {dropdownOpen && userInfo && (
        <ul
          className={`absolute right-15 mt-2  w-[10rem] space-y-2 bg-white text-gray-600 rounded-md shadow-lg ${!userInfo.isAdmin ? '-top-20' : '-top-24'}`}
        >
          {userInfo.isAdmin && (
            <li>
              <Link to="/admin/movies/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                Dashboard
              </Link>
            </li>
          )}

          <li>
            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </Link>
          </li>

          <li>
            <button 
            onClick={logoutHandler}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Logout
            </button>
          </li>
        </ul>
      )}
{console.log("username",userInfo)
}
      {!userInfo && (
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="flex items-center  transition-transform ">
              <AiOutlineLogin 
               className="mr-2 text-white hover:text-teal-500 cursor-pointer" 
               size={26} 
              />
              <span className="hidden nav-item-name">LOGIN</span>
            </Link>
          </li>
          <li>
            <Link to="/register" className="flex items-center transition-transform ">
              <AiOutlineUserAdd
                  size={26} 
                  className="text-white hover:text-teal-500 cursor-pointer"
                  
                  />
              <span className="hidden nav-item-name">REGISTER</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  </section>
</div>

  );
};

export default Navigation;
