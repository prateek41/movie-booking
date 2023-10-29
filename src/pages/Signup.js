import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../assets/images/1.jpg'
import Logo from '../assets/images/2.jpg'

const Signup = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        try {
            console.log('Submit ', email, password)
        } catch (error) {
            
        }
    }

    return (
        <div>
        <img src={Bg} alt={'bg'} className='w-[100vw] h-[100vh] absolute top-0 -z-10' />
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-900/90 rounded-lg p-4">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create a new account</h2>
            </div>
            <form className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">Email address</label>
                <div className="mt-2">
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">Password</label>
                </div>
                <div className="mt-2">
                <input value={password} onChange={(e) => setPassword(e.target.value)}  id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
            </div>

            <div>
                <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Create Account
                </button>
            </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-100">
            Already have a account? 
            </p> 
            <Link to={'/login'} className="text-white underline text-center mt-2">
                Login
            </Link>
        </div>
        </div>
    </div>
      )
}

export default Signup