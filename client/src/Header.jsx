import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import { BiMenuAltRight } from 'react-icons/bi';
import { UserContext } from './UserContext';
import axios from 'axios';

const Header = () => {

    const [navMenu, setNavMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);

    const { user, setUser } = useContext(UserContext);

    const handleNavMenu = () => {
        setNavMenu(!navMenu);
        setProfileMenu(false);
    }

    const handleProfileMenu = () => {
        setProfileMenu(!profileMenu);
        setNavMenu(false);
    }

    const signOut = async () => {
        await axios.post('/signout');
        setUser(null);
    };


    return (
        <header className='flex relative justify-between items-center px-4 md:px-16 py-4 bg-secondary shadow-md font-primary'>
            <Link to={'/'}>WheelsUp.co</Link>

            <div className='gap-8 hidden md:flex'>
                <Link className='hover:text-primary text-sm'>Home</Link>
                <Link className='hover:text-primary text-sm'>Explore cars</Link>
                <Link className='hover:text-primary text-sm'>Booking</Link>
                <Link className='hover:text-primary text-sm'>Help center</Link>
            </div>

            <div className='flex gap-4 items-center'>
                {user === null && <Link to={'/signin'} className='bg-primary text-sm rounded-lg px-6 py-1.5 flex items-center text-white'>Sign in</Link>}
                <div className='relative border bg-white text-gray-300 p-2 text-xl rounded-lg'>
                    <GoPerson className='cursor-pointer' onClick={handleProfileMenu} />
                    {(profileMenu && !!user) &&
                        <div className='absolute flex flex-col text-textDefault bg-primary right-0 top-16 w-40 rounded-lg'>
                           {/* <Link to={'/profile'} className='border-b px-4 py-3 text-sm text-white'>{user.username}</Link> */}
                           <Link to={'/profile'} onClick={e => setProfileMenu(false)} className='border-b px-4 py-3 text-sm text-white'>My account</Link>
                           <button onClick={signOut} className='text-left px-4 py-3 text-sm text-white'>Sign out</button>
                        </div>
                    }
                </div>
                <BiMenuAltRight onClick={handleNavMenu} className='text-4xl text-primary md:hidden cursor-pointer' />
            </div>

            {navMenu &&
                <div className='flex flex-col bg-primary absolute right-5 top-20 md:hidden w-40'>
                    <Link className='border-b px-4 py-3 text-white'>Home</Link>
                    <Link className='border-b px-4 py-3 text-white'>Explore cars</Link>
                    <Link className='border-b px-4 py-3 text-white'>Booking</Link>
                    <Link className='border-b px-4 py-3 text-white'>Help center</Link>
                </div>
            }
        </header>
    )
}

export default Header;