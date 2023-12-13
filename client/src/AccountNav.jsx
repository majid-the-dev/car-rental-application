import React from 'react';
import { Link } from 'react-router-dom';

const AccountNav = () => {
    return (
        <div className='flex gap-4 lg:gap-7 bg-white ring-gray-200 ring-1 px-5 py-6 rounded-xl'>
            <Link to={'/profile'} className='text-sm text-textDefault'>Dashboard</Link>
            <Link to={'/profile'} className='text-sm text-textDefault'>Profile</Link>
            <Link to={'/profile'} className='text-sm text-textDefault'>Booking</Link>
            <Link to={'/profile/listing'} className='text-sm text-textDefault'>Listing</Link>
        </div>
    )
}

export default AccountNav