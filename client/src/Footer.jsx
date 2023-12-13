import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <div className='bg-tertiary px-4 md:px-16 pt-10 pb-10 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='lg:col-span-2 lg:-order-1 order-2'>
                <h1 className='text-textDefault text-md font-medium mb-2'>WheelsUp</h1>
                <p className='text-textDefault leading-6 mt-5 text-sm font-light lg:text-left font-primary'>
                    Our user-friendly online platform makes it a breeze to book your desired car.
                    Simply select your pickup location, dates, and preferred vehicle category,
                    and we'll provide you with a range of options to choose from. Booking a car has never been easier!
                </p>
            </div>

            <div className='lg:col-span-1 flex flex-col gap-3'>
                <h3 className='text-textDefault text-md font-medium mb-2'>Quick Links</h3>
                <Link className='text-textDefault text-sm font-light hover:text-primary'>About</Link>
                <Link className='text-textDefault text-sm font-light hover:text-primary'>Blog</Link>
                <Link className='text-textDefault text-sm font-light hover:text-primary'>Careers</Link>
                <Link className='text-textDefault text-sm font-light hover:text-primary'>Privacy policy</Link>
                <Link className='text-textDefault text-sm font-light hover:text-primary'>Terms & conditions</Link>
            </div>

            <div className='lg:col-span-1 flex flex-col gap-3'>
                <h3 className='text-textDefault text-md font-medium mb-2'>Contact Info</h3>

                <div className='flex gap-3 items-center'>
                    <span className='bg-white inline-flex p-2.5 rounded-lg'>
                        <BsFillTelephoneFill className='text-textDefault text-sm' />
                    </span>
                    <p className='text-sm text-textDefault font-light'>+234 704 850 5697</p>
                </div>

                <div className='flex gap-3 items-center'>
                    <span className='bg-white inline-flex p-2 rounded-lg'>
                        <MdEmail className='text-textDefault text-md' />
                    </span>
                    <p className='text-sm text-textDefault font-light'>info@wheelsup.com.ng</p>
                </div>

                <div className='flex gap-3 items-center'>
                    <span className='bg-white inline-flex p-2 rounded-lg'>
                        <MdLocationOn className='text-textDefault text-lg' />
                    </span>
                    <p className='text-sm text-textDefault font-light'>Elephant house, Marina, Lagos</p>
                </div>

                <div>
                    <h3 className='text-textDefault text-md font-medium mt-2'>Connect with us</h3>

                    <div className='flex gap-2 mt-2'>
                        <div className='bg-blue-600 p-2 rounded-full inline-flex'>
                            <a href=""><FaFacebookF className='text-xl text-white' /></a>
                        </div>

                        <div className='bg-rose-600 p-2 rounded-full inline-flex'>
                            <a href=""><AiFillInstagram className='text-xl text-white' /></a>
                        </div>

                        <div className='bg-blue-400 p-2 rounded-full inline-flex'>
                            <a href=""><BsTwitter className='text-xl text-white' /></a>
                        </div>

                        <div className='bg-blue-800 p-2 rounded-full inline-flex'>
                            <a href=""><FaLinkedinIn className='text-xl text-white' /></a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer
