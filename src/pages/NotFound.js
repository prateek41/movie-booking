import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex mt-8 flex-col gap-4 container mx-auto'>
        <div className='text-center text-4xl font-bold'>404</div>
        <div className='text-center text-2xl font-semibold'>Page Not Found</div>
        <Link to={'/'} className='w-fit mx-auto p-2 bg-blue-600 hover:bg-blue-500 text-white rounded'>
            Go Home
        </Link>
    </div>

  )
}

export default NotFound