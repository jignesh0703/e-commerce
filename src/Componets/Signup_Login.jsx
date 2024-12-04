import React, { useContext, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../context/Context';

const Signup_Login = ({ setshowlogin }) => {

  const [state, setState] = useState("Sign Up");
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChanges = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const {URL} = useContext(StoreContext)



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (state==="Sign Up") {
        const response = await axios.post(`${URL}/api/users/register`, formdata);
        toast.success(response.data.message || 'Registration Successful!');        
      } else {
        const response = await axios.post(`${URL}/api/users/Login`,formdata);
        toast.success(response.data.message || 'Login Successful');
        console.log(response.data.message)
        localStorage.setItem('authToken',response.data.token);
      }
      setshowlogin(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error registering user');
    }
  };

  return (
    <>
      <div className='bg-overlay z-50 w-full h-full fixed flex justify-center items-center top-0' onClick={(event) => setshowlogin(false)}>
        <div className='w-[20rem] sm:w-[30rem] h-auto bg-white flex justify-center items-center pt-6 pb-10 rounded-[15px]' onClick={(e) => e.stopPropagation()}>
          <div className='w-[18rem] sm:w-[26rem] h-auto'>
            <div className='flex justify-between items-center border-b-2 border-slate-200 rounded-none pb-3 bg-white'>
              <h1 className='text-[1.5rem] font-bold bg-white'>{state}</h1>
              <h1 onClick={() => setshowlogin(false)}><IoClose className='w-[1.5rem] h-[1.5rem] cursor-pointer bg-white' /></h1>
            </div>
            <form className='grid mt-6 bg-white' onSubmit={handleSubmit}>
              {state === "Sign Up" && (
                <input
                  type="text"
                  placeholder='Enter Your Name'
                  name="name" // Added name attribute
                  required
                  className='bg-white ml-[1rem] w-[16rem] sm:w-[24rem] border-slate-400 border mb-6 h-10 outline-none rounded-[5px] pl-4 font-bold'
                  value={formdata.name}
                  onChange={handleChanges}
                />
              )}
              <input
                type="email"
                placeholder='Enter Your Email'
                name="email" // Added name attribute
                required
                className='bg-white ml-[1rem] w-[16rem] sm:w-[24rem] border-slate-400 border mb-6 h-10 outline-none rounded-[5px] pl-4 font-bold'
                value={formdata.email}
                onChange={handleChanges}
              />
              <input
                type="password"
                placeholder='Enter Your Password'
                name="password" // Added name attribute
                required
                className='bg-white ml-[1rem] w-[16rem] sm:w-[24rem] border-slate-400 border mb-6 h-10 outline-none rounded-[5px] pl-4 font-bold'
                value={formdata.password}
                onChange={handleChanges}
              />
              <button type='submit' className='ml-[1rem] w-[16rem] sm:w-[24rem] bg-[#006aaf] border-none mb-4 h-10 outline-none rounded-[5px] font-bold text-white cursor-pointer'>
                {state === "Sign Up" ? "Create Account" : "Login"}
              </button>
              <div className='flex w-[16rem] sm:w-[24rem] ml-[1rem] items-start bg-white'>
                <input type="checkbox" required className='mt-[6px] cursor-pointer bg-white' />
                <p className='ml-2 tracking-wide bg-white'>By Continuing. I agree to the terms of use & privacy policy.</p>
              </div>
              <div className='ml-[1rem] mt-6 bg-white w-max'>
                {state === "Sign Up"
                  ? <h1 className='bg-white'>Already have an account? <span onClick={() => setState("Login")} className='text-[#006aaf] ml-1 cursor-pointer font-bold bg-white'>Login here</span></h1>
                  : <h1 className='bg-white'>Create a new account? <span onClick={() => setState("Sign Up")} className='text-[#006aaf] ml-1 cursor-pointer font-bold bg-white'>Click here</span></h1>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup_Login;
