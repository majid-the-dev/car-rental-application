import React from 'react';
import { BsFillPersonPlusFill, BsPersonCheckFill, BsFillCarFrontFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa'

const GetStarted = ({ id, heading, paragraph, icon }) => {

    // let icon;
    // if (id === 1) {
    //     icon = <BsFillPersonPlusFill className='text-red text-2xl' />
    // } else if (id === 2) {
    //     icon = <BsFillCarFrontFill className='text-2xl text-primary' />
    // } else if (id === 3) {
    //     icon = <BsPersonCheckFill className='text-2xl text-green' />
    // } else {
    //     icon = <FaHandshake className='text-2xl text-purple' />
    // }

  return (
    <div className='bg-white ring-1 ring-gray-200 rounded-2xl p-6 shadow-sm'>
        <div className='bg-secondary p-3 inline-flex rounded-2xl text-textDefault'>{icon}</div>
        <h1 className='text-xl text-textDefault font-normal mt-4'>{heading}</h1>
        <p className='mt-3 text-sm font-light'>{paragraph}</p>
    </div>
  )
}

export default GetStarted;