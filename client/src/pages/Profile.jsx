import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AccountNav from '../AccountNav';
import { BsPersonCircle } from 'react-icons/bs';
import { IoMdInformationCircle } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';
import { UserContext } from '../UserContext';
import axios from 'axios';

const Profile = () => {

    const { user, setUser, ready } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);
    const [firstName, setFirstName] = useState(user && user.firstName);
    const [lastName, setLastName] = useState(user && user.lastName);
    const [mobile, setMobile] = useState(user && user.mobile);
    const [email, setEmail] = useState(user && user.email);
    const [username, setUsername] = useState(user && user.username);
    const [password, setPassword] = useState(user && user.password);

    if (!ready) {
        <p>Loading</p>
    }

    if (ready && !user) {
        return <Navigate to={'/signin'} />
    }

    return (
        <div>
            <AccountNav />

            <br />

            <div className='flex flex-col lg:flex-row gap-10 mt-5'>
                <div className='flex flex-col items-center lg:w-1/3 bg-white p-8 rounded-xl ring-1 ring-gray-200'>
                    <div className='relative bg-gray-200 rounded-full h-52 w-52 flex justify-center items-center'>
                        <p className='text-xs text-gray-500'>Upload picture here</p>
                        <label htmlFor="avatar">
                            <input type="file" id='avatar' className='sr-only' />
                            <div className='absolute top-2 right-5 bg-white shadow-md p-2 rounded-full'>
                                <FaPencilAlt className='text-gray-500 text-lg cursor-pointer' />
                            </div>
                        </label>
                    </div>
                    <p className='text-gray-500 text-xs mt-5 flex items-center gap-1'>Not verified <IoMdInformationCircle className='cursor-pointer text-lg' /></p>
                    <Link className='mt-5 bg-primary text-white text-sm px-4 py-2 rounded-lg'>Verify profile</Link>
                    <h4 className='mt-5 text-xs text-gray-500'>Current user rating: 8/10</h4>
                </div>

                <div className='lg:w-2/3 bg-white px-8 py-8 rounded-xl ring-1 ring-gray-200'>
                    <h3 className='text-xl font-medium text-textDefault'>User profile</h3>

                    <form className='flex flex-col gap-6 lg:grid lg:gap-x-10 lg:gap-y-4 lg:grid-cols-2 mt-5'>
                        <div className='flex flex-col'>
                            <label className='text-xs text-gray-500'>First Name</label>
                            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className='text-sm font-medium mt-2 px-3 py-3 rounded-lg border border-gray-300' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-xs text-gray-500'>Last Name</label>
                            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className='text-sm font-medium mt-2 px-3 py-3 rounded-lg border border-gray-300' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-xs text-gray-500'>Mobile Number</label>
                            <input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} className='text-sm font-medium mt-2 px-3 py-3 rounded-lg border border-gray-300' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-xs text-gray-500'>Email</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='text-sm font-medium mt-2 px-3 py-3 rounded-lg border border-gray-300' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-xs text-gray-500'>Username</label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className='text-sm font-medium mt-2 px-3 py-3 rounded-lg border border-gray-300' />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-xs text-gray-500'>Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='text-sm font-medium mt-2 px-3 py-3 rounded-lg border border-gray-300' />
                        </div>

                        <div className='flex gap-3 lg:mt-2'>
                            <button className='bg-primary text-white text-sm px-4 py-2 rounded-lg'>Update Profile</button>
                            <button className='ring-rose-600 ring-1 text-rose-600 hover:bg-rose-600 hover:text-white text-sm px-4 py-2 rounded-lg'>Delete Account</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Profile;