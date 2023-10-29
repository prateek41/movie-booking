import React from 'react';
import Logo from '../assets/images/2.jpg';
import { useAuthContext } from '../context/auth';

const Navbar = () => {
   const {user, logout} = useAuthContext();

   const handleLogout = () => {
        logout();
    }

  return (
    <header className="body-font bg-gray-700 text-white">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href='./' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img  src={Logo} alt="Logo" className='w-10 h-10'/>
                <span className="ml-3 text-xl text-white">ShowHub</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href='/' className="mr-5 hover:text-gray-200">Home</a>
                <a href='#about' className="mr-5 hover:text-gray-200">About us</a>
                <a href='#help' className="mr-5 hover:text-gray-200">Help</a>
                {
                    !user ? 
                    <>
                    <a href='/signup' className="mr-5 hover:text-gray-200">Signup</a>
                    <a href='/login' className="mr-5 hover:text-gray-200">Login</a> 
                    </>
                    : 
                    <>
                     <a href='#' onClick={handleLogout} className="mr-5 hover:text-gray-200">Logout</a> 
                    <img className="inline object-cover w-8 h-8 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                    </>
                }
            </nav>
            {/* <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
                Button
            </button> */}
        </div>
    </header>
  )
}

export default Navbar