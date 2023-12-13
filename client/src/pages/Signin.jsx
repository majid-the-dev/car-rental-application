import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cars from '../assets/signup-cars.png';
import axios from 'axios';
import { UserContext } from '../UserContext';

const Signin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser, user } = useContext(UserContext)

  async function handleSignin(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post('/signin', {
        username,
        password
      });
      setUser(data);
      alert('Signin sucessful');
      setRedirect(true);
    } catch (error) {
      alert('Signin failed');
      console.log(error);
    }

  };

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className='signup-page flex -mx-4 md:-mx-16 -mt-8'>

      <div className='flex flex-1 justify-center flex-col gap-10 lg:gap-10'>

        <div className='px-8 lg:px-24'>
          {/* <small className='text-xs text-gray-400 font-medium'>START FOR FREE</small> */}
          <h1 className='mt-2 lg:mt-1 text-2xl lg:text-3xl font-bold text-textDefault'>Welcome back</h1>
          <p className='mt-3 lg:mt-1 text-sm'>Don't have an account yet? <span><Link to={'/signup'} className='text-primary underline'>Sign up</Link></span></p>
        </div>

        <div className='px-8 lg:px-24'>
          <form className='flex flex-col gap-5' onSubmit={handleSignin}>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Username*</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter username' className='text-xs mt-2 px-3 py-3 rounded-lg border border-gray-300' />
            </div>

            <div className='flex flex-col'>
              <label className='text-xs text-gray-400'>Password*</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter pasword' className='text-xs mt-2 px-3 py-3 rounded-lg border border-gray-300' />
              <Link className='text-xs mt-2 underline'>Forgot password?</Link>
            </div>

            <button className='bg-primary text-xs text-white font-medium py-3 rounded-lg col-span-full shadow-lg'>Sign in</button>
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
            Resume your journey with us!
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

export default Signin;