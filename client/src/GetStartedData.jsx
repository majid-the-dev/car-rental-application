import { BsFillPersonPlusFill, BsPersonCheckFill, BsFillCarFrontFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa'

export const GetStartedData = [
    {
        id: 1,
        icon: <BsFillPersonPlusFill className='text-red text-2xl' />, 
        heading: 'Create a profile',
        paragraph: 'Register on WheelsUp to access a personalized car rental experience.'
    },
    {
        id: 2,
        icon: <BsFillCarFrontFill className='text-2xl text-primary' />,
        heading: 'Choose a vehicle',
        paragraph: 'Specify your preferred vehicle, rental period, and pick-up location.'
    },
    {
        id: 3,
        icon: <BsPersonCheckFill className='text-2xl text-green' />,
        heading: 'Match with owner',
        paragraph: 'Our algorithm will match you with the best available rental options.'
    },
    {
        id: 4,
        icon: <FaHandshake className='text-2xl text-purple' />,
        heading: 'Make a deal',
        paragraph: 'Finalize the rental agreement with the car owner and enjoy your hassle-free ride.'
    }
]