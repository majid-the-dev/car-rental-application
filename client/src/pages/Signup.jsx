import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cars from '../assets/signup-cars.png';
import axios from 'axios';

const Signup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup(e) {
    e.preventDefault();

    try {
      await axios.post('/signup', {
        firstName,
        lastName,
        mobile,
        email,
        username,
        password
      });
      alert('Signup successfull')
    } catch (error) {
      alert('signup failed')
    }
  }

  return (
    <div className='signup-page flex -mx-4 md:-mx-16 -mt-8'>

      <div className='flex flex-1 justify-center flex-col gap-10 lg:gap-10'>

        <div className='px-8 lg:px-20'>
          <small className='text-xs text-gray-400 font-medium'>START FOR FREE</small>
          <h1 className='mt-2 lg:mt-1 text-2xl lg:text-3xl font-bold text-textDefault'>Create your account</h1>
          <p className='mt-3 lg:mt-1 text-sm'>Already a member? <span><Link to={'/signin'} className='text-primary underline'>Sign in</Link></span></p>
        </div>

        <div className='px-8 lg:px-20'>
          <form className='grid grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-6 ' onSubmit={handleSignup}>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>First Name*</label>
              <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='Enter first name' className='text-xs mt-2 px-3 py-2 rounded-lg border border-gray-300' />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Last Name*</label>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Enter last name' className='text-xs mt-2 px-3 py-2 rounded-lg border border-gray-300' />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Mobile Number*</label>
              <input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} placeholder='Enter mobile number' className='text-xs mt-2 px-3 py-2 rounded-lg border border-gray-300' />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Email*</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email' className='text-xs mt-2 px-3 py-2 rounded-lg border border-gray-300' />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Username*</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter username' className='text-xs mt-2 px-3 py-2 rounded-lg border border-gray-300' />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Password*</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter pasword' className='text-xs mt-2 px-3 py-2 rounded-lg border border-gray-300' />
            </div>

            <button className='bg-primary text-xs text-white font-medium py-3 rounded-lg col-span-full shadow-lg'>Create account</button>
          </form>
        </div>

      </div>

      <div className='hidden lg:flex md:flex-col flex-1 items-center justify-center bg-primary'>
        <div>
          {/* <div className='flex items-center justify-center text-center text-9xl text-white'>
            <BsCarFrontFill />
          </div> */}
          <div className='px-16'>
            <img src={Cars} alt="" className='h-auto w-auto' />
          </div>
          <h1 className='text-center text-white text-xl font-bold mt-7'>
            Start your journey with us!
          </h1>
          <p className='text-center px-24 mt-2 text-white text-sm font-light '>
            Don't let transportation constraints limit your exploration.
            With WheelsUp, you can embark on unforgettable journeys,
            discover hidden gems, and create memories that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup;