import { BsPeopleFill, BsFillCalendarCheckFill } from 'react-icons/bs';
import { AiFillDashboard } from 'react-icons/ai';
import { HiDocumentCheck } from 'react-icons/hi2';

export const ChooseUsData = [
    {
        icon: <BsPeopleFill className='text-red text-2xl' />,
        heading: '463 Happy customers',
        paragraph: 'We take pride in delivering exceptional service and creating memorable experiences for our customers.'
    },
    {
        icon: <AiFillDashboard className='text-2xl text-primary' />,
        heading: '1514 Trips powered',
        paragraph: 'Join our growing community of satisfied customers and experience the exceptional service that sets us apart.'
    },
    {
        icon: <HiDocumentCheck className='text-2xl text-green' />,
        heading: '605 vehicles',
        paragraph: 'Whether you are looking for a vehicle for city driving or a special occasion, we have the perfect car to meet your requirements.'
    },
    {
        icon: <BsFillCalendarCheckFill className='text-2xl text-purple' />,
        heading: '2 Years experience',
        paragraph: 'We are committed to providing prompt and personalized service to ensure your rental experience is smooth and enjoyable.'
    }
]