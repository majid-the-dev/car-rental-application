import React, { useContext } from 'react';
import CarHero from '../assets/car-2.png';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import { GetStartedData } from '../GetStartedData';
import GetStarted from '../GetStarted';
import { ChooseUsData } from '../ChooseUsData';
import Footer from '../Footer';

const Homepage = () => {

    const GetStartedCard = GetStartedData.map(card => {
        return (
            <GetStarted
                {...card}
            />
        )
    })

    const ChooseUsCard = ChooseUsData.map(card => {
        return (
            <GetStarted 
                {...card}
            />
        )
    })

    return (
        <div>
            <div className='flex gap-12 flex-col lg:flex-row pt-12'>
                <div className='flex flex-col lg:justify-center'>
                    <Link className='text-primary font-primary text-sm'>www.wheelsup.com.ng</Link>
                    <h1 className='text-4xl md:text-5xl leading-normal text-textDefault font-semibold mt-5 lg:text-left font-primary'>THE ULTIMATE <br /> CAR RENTAL SOLUTION</h1>
                    <h3 className='text-textDefault leading-7 mt-5 text-md font-light lg:text-left font-primary'>
                        Rent your ideal car or earn passive income by listing your vehicle for rent.
                        Join today and embark on a journey of seamless car rental experiences and lucrative opportunities.
                    </h3>
                </div>
                <div className='flex justify-center items-center px-10 lg:px-10'>
                    {/* <img src={CarHero} alt="" className='h-auto w-96 md:h-auto md:w-auto' /> */}
                    <img src={CarHero} alt="" className='h-auto w-auto' />
                </div>
            </div>

            <br />

            <div>
                <SearchBox />
            </div>

            <br />

            <div>
                <h2 className='text-2xl text-textDefault '>Featured cars</h2>
            </div>

            <br />

            <div>
                <h2 className='text-2xl text-textDefault '>Get started with 4 simple steps</h2>
                <span className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-8'>
                    {GetStartedCard}
                </span>
            </div>

            <br />

            <div>
                <h2 className='text-2xl text-textDefault '>Why choose us?</h2>
                <span className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-8'>
                    {ChooseUsCard}
                </span>
            </div>

        </div>

    )
}

export default Homepage;