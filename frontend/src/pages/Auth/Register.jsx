/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/loader'
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useRegisterMutation } from "../../redux/api/users";
import { toast } from "react-toastify";

const Register = () => { 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isloading }] = useRegisterMutation();

  const  userInfo  = useSelector((state) => state.auth?.userInfo);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if(userInfo){
      navigate(redirect);
    }

  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e)=>{
    e.preventDefault()
    if(password != confirmPassword){
      toast.error("password do not match")
    }
    else{
      try{
        const res = await register({username , email , password}).unwrap()
        dispatch(setCredentials({...res}))
        navigate(redirect)
        toast.success('user successfully registerd.')
      }catch(err){
        console.log(err);
        toast.error(err.data.message)
      }
    }
  }


  return ( <div
  className="pl-[10rem] flex flex-wrap register-container"
  
  >
    <div className="mr-[rem] mt-[5rem]">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={submitHandler} className ="constainer w-[40rem]" action="">
        <div className="my-[2rem]">
          <label htmlFor="name" className="block text-sm font-medium  " >
            name
          </label>
          <input 
            type="text" 
            name="" id="name" 
            className="mt-1 p-2 border rounded w-full" 
            placeholder="enter name" 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)} 
          />

        </div>
        <div className="my-[2rem]">
          <label htmlFor="email" className="block text-sm font-medium  " >
            email address
          </label>
          <input 
            type="email" 
            name="" id="email" 
            className="mt-1 p-2 border rounded w-full" 
            placeholder="enter email" 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} 
          />
            
        </div>
        <div className="my-[2rem]">
          <label htmlFor="password" className="block text-sm font-medium  " >
            password
          </label>
          <input 
            type="password" 
            name="" id="password" 
            className="mt-1 p-2 border rounded w-full" 
            placeholder="enter password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} 
          />
            
        </div>
        <div className="my-[2rem]">
          <label htmlFor="confirmPassword" className="block text-sm font-medium  " >
          confirm Password
          </label>
          <input 
            type="password" 
            name="" id="confirmPassword" 
            className="mt-1 p-2 border rounded w-full" 
            placeholder="confirm password" 
            value={confirmPassword} 
            onChange={(e)=> setConfirmPassword(e.target.value)} 
          /> 
        </div>
        <button
          disabled={isloading} 
          type="submit" 
          className="bg-teal-500 text-white px-4 py-1 rounded cursor-pointer my-[1rem]"
        >
            {isloading ? "Registering..." : "Register"}
        </button>
        {isloading && <Loader/>}
      </form>

      <div className="mt-0.2">
        <p className="text-white">
          Already have an accout? {""}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}
           className="text-teal-500 hover:underline"
          >
           Login
          </Link>
        </p>
      </div>

    </div>
    
  </div>);
};

export default Register;
