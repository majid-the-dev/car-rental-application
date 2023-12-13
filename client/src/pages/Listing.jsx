import React from 'react';
import AccountNav from '../AccountNav';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs'

const Listing = () => {
  return (
    <div>
        <AccountNav />

        <br />

        <div className='text-right'>
            <Link to={'/profile/listing/new'} className='bg-primary text-white inline-flex items-center text-sm px-3 py-3 rounded-full' ><BsPlus className='text-3xl' /></Link>
        </div>
    </div>
  )
}

export default Listing;