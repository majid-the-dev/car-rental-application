import React, { useState } from 'react';

const SearchBox = () => {

    const [vehicle, setVehicle] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')


    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='mt-7'>
            <form onSubmit={handleSearchSubmit} className='flex lg:inline-flex flex-col lg:flex-row gap-01 rounded-2xl bg-white lg:items-center ring-gray-200 ring-1 shadow-sm'>
                <div className='flex flex-col border-b border-gray-300 lg:border-r lg:border-b-0 px-4 py-5 lg:py-2'>
                    <label className='text-gray-400 text-sm'>Select Vehicle</label>
                    <input className='search-box-input' type="text" value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder='SUV, sedan, pickup...' />
                </div>

                <div className='flex flex-col border-b border-gray-300 lg:border-r lg:border-b-0 px-4 py-5 lg:py-2'>
                    <label className='text-gray-400 text-sm'>Pickup Location</label>
                    <input className='search-box-input' type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder='Enter city or address' />
                </div>

                <div className='flex flex-col border-b border-gray-300 lg:border-r lg:border-b-0 px-4 py-5 lg:py-2'>
                    <label className='text-gray-400 text-sm'>Pickup Date & Time</label>
                    <span>
                        <input className='search-box-input' type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
                    </span>
                </div>

                {/* <div className='flex flex-col border-r p-4'>
                    <label className='text-gray-400 text-sm'>Return Date & Time</label>
                    <span>
                        <input type="datetime-local" placeholder='' />
                    </span>
                </div> */}

                <div className='px-4 py-5 lg:py-2'>
                    <button className='bg-primary w-full text-white px-8 py-4 lg:py-2 rounded-2xl'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBox