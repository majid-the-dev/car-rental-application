import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import Profile from './pages/Profile';
import Listing from './pages/Listing';
import ListingForm from './pages/ListingForm';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/listing' element={<Listing />} />
          <Route path='/profile/listing/new' element={<ListingForm />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
