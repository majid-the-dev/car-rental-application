import React from 'react';
import AccountNav from '../AccountNav';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { wheelBodyType } from '../wheelBodyTypeData';
import { wheelMakeData } from '../wheelMakeData';
import { BsFillKeyFill } from 'react-icons/bs';
import { GiGearStickPattern } from 'react-icons/gi';
import { wheelTransmissionData } from '../wheelTransmissionData';
import { FaGasPump } from 'react-icons/fa';
import { wheelFuelTypeData } from '../wheelFuelTypeData';
import { GiCarWheel } from 'react-icons/gi';
import { wheelDrivetrainData } from '../wheelDrivetrainData';
import { BsFillCalendarCheckFill } from 'react-icons/bs'

const ListingForm = () => {

    const currentYear = new Date();
    const startYear = 1990;
    const endYear = currentYear.getFullYear;

    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push(
            <option key={year} value={year}>
                {year}
            </option>
        );
    };

    console.log(endYear);

    return (
        <div>
            <AccountNav />

            <br />

            <div className='mt-2'>
                <h1 className='text-textDefault font-bold text-3xl mb-7'>New wheels listing</h1>
                <form className='flex flex-col gap-6'>
                    <div className='flex flex-col'>
                        <label className='text-textDefault text-sm font-bold'>Title</label>
                        <input className='text-sm p-4 rounded-lg mt-3 ring-1 ring-gray-200' type="text" placeholder='Enter listing title' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-textDefault text-sm font-bold'>Pickup address</label>
                        <input className='text-sm p-4 rounded-lg mt-3 ring-1 ring-gray-200' type="text" placeholder='Enter pickup address for vehicle' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-textDefault text-sm font-bold'>Dropoff address <span className='font-light italic'>(optional)</span></label>
                        <input className='text-sm p-4 rounded-lg mt-3 ring-1 ring-gray-200' type="text" placeholder='Enter dropoff address for vehicle' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-textDefault text-sm font-bold'>Listing description</label>
                        <textarea className='text-sm p-4 rounded-lg mt-3 ring-1 ring-gray-200' type="text" placeholder='Enter dropoff address for vehicle' />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-textDefault text-sm font-bold'>Vehicle gallery</label>
                        <span className='flex items-center gap-3 mt-3'>
                            <input className='w-full text-sm p-4 rounded-lg ring-1 ring-gray-200' type="text" placeholder='Enter photo link' />
                            <button className='bg-primary text-white text-sm rounded-lg p-4'>Add&nbsp;photo</button>
                        </span>
                        <label className='h-40 w-40 bg-white text-sm inline-flex gap-2 flex-col items-center justify-center rounded-xl mt-4 cursor-pointer ring-1 ring-gray-200'>
                            <FaCloudUploadAlt className='text-4xl text-primary' />
                            <input type="file" multiple className='hidden' />
                            Upload photos
                        </label>
                    </div>

                    <div>
                        <label className='text-textDefault text-sm font-bold'>Specifications</label>
                        <hr className='border-gray-300 mt-3' />
                        <div className='mt-5 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                            <div className='ring-1 ring-gray-300 px-6 py-6 inline-flex flex-col rounded-xl'>
                                <span className='flex text-sm md:justify-center gap-2 font-semibold items-center'>
                                    <BsFillCarFrontFill />
                                    Body
                                </span>
                                <select className='p-2 mt-2 rounded-lg text-sm'>
                                    {wheelBodyType.map((option) => (
                                        <option className='text-textDefault' key={option.id} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='ring-1 ring-gray-300 px-6 py-6 inline-flex flex-col rounded-xl'>
                                <span className='flex text-sm md:justify-center gap-2 font-semibold items-center'>
                                    <BsFillKeyFill />
                                    Make
                                </span>
                                <select className='p-2 mt-2 rounded-lg text-sm'>
                                    {wheelMakeData.map((option) => (
                                        <option className='text-textDefault' key={option.id} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='ring-1 ring-gray-300 px-6 py-6 inline-flex flex-col rounded-xl'>
                                <span className='flex text-sm md:justify-center gap-2 font-semibold items-center'>
                                    <GiGearStickPattern />
                                    Transmission
                                </span>
                                <select className='p-2 mt-2 rounded-lg text-sm'>
                                    {wheelTransmissionData.map((option) => (
                                        <option className='text-textDefault' key={option.id} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='ring-1 ring-gray-300 px-6 py-6 inline-flex flex-col rounded-xl'>
                                <span className='flex text-sm md:justify-center gap-2 font-semibold items-center'>
                                    <FaGasPump />
                                    Fuel type
                                </span>
                                <select className='p-2 mt-2 rounded-lg text-sm'>
                                    {wheelFuelTypeData.map((option) => (
                                        <option className='text-textDefault' key={option.id} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='ring-1 ring-gray-300 px-6 py-6 inline-flex flex-col rounded-xl'>
                                <span className='flex text-sm md:justify-center gap-2 font-semibold items-center'>
                                    <GiCarWheel />
                                    Drivetrain
                                </span>
                                <select className='p-2 mt-2 rounded-lg text-sm'>
                                    {wheelDrivetrainData.map((option) => (
                                        <option className='text-textDefault' key={option.id} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='ring-1 ring-gray-300 px-6 py-6 inline-flex flex-col rounded-xl'>
                                <span className='flex text-sm md:justify-center gap-2 font-semibold items-center'>
                                    <BsFillCalendarCheckFill />
                                    Year
                                </span>
                                <select className='p-2 mt-2 rounded-lg text-sm'>
                                    {yearOptions.map((year) => (
                                        <option className='text-textDefault'>{year}</option>
                                    ))}
                                </select>
                            </div>



                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListingForm