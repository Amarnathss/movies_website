/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect , useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import Loader from '../../components/loader'
import {setCredentials} from '../../redux/features/auth/authSlice'
import {useProfileMutation} from '../../redux/api/users'


const Profile = () => {
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] =  useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    const {userInfo} = useSelector((state) => state.auth)

    const [updateProfile , {isLoading : loadingUpdateProfile}] = useProfileMutation()
    
    useEffect(()=>{
        setUsername(userInfo.username)
        setEmail(userInfo.email)
    },[userInfo.username,userInfo.email])

    const dispatch = useDispatch();

    const submitHandler = async (e) =>{
        e.preventDefault()

        if(password != confirmPassword){
            toast.error("password do not match")
        }
        else{
            try{
                const res = await updateProfile({
                    _id:userInfo._id,
                    username,
                    email,
                    password,
                }).unwrap()
                dispatch(setCredentials({...res}))
                toast.success("profile updated successfully")
            }catch (err){
                toast.error(err?.data?.message || err.error)
            }
        }
    }

  return (
    <div>
      <div className="container mx-auto p-4 mt-[10rem]">
        <div className="flex justify-center align-center md:flex md:space-x-4">
            <div className="md:w-1/3">
               <h2 className='text-2xl font-semibold mb-4s'>Update Profile</h2>

               <form onSubmit={submitHandler} >
                <div className="mb-4">
                    <label className='block text-white mb-2' >Name</label>
                    <input 
                       type="text"
                       placeholder='enter name'
                       className='form-input p-4 rounded-sm w-full border'
                       value={username}
                       onChange={(e)=> setUsername(e.target.value)}
                      />
                </div>
                <div className="mb-4">
                    <label className='block text-white mb-2' >Email</label>
                    <input 
                       type="email"
                       placeholder='enter email'
                       className='form-input p-4 rounded-sm w-full border '
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                      />
                </div>
                <div className="mb-4">
                    <label className='block text-white mb-2' >Password</label>
                    <input 
                       type="password"
                       placeholder='enter password'
                       className='form-input p-4 rounded-sm w-full border'
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                      />
                </div>
                <div className="mb-4">
                    <label className='block text-white mb-2' >Confirm Password</label>
                    <input 
                       type="Password"
                       placeholder='Confirm Password'
                       className='form-input p-4 rounded-sm w-full border'
                       value={confirmPassword}
                       onChange={(e)=> setConfirmPassword(e.target.value)}
                      />
                </div>
                <div className="flex justify-between">
                    <button type='submit' className='bg-teal-500 w-screen mt-[2rem] font-bold text-white py-2 px-4 rounded hover:bg-teal-600' >Update</button>
                    {loadingUpdateProfile && <Loader/> }
                </div>
               </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
