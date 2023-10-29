import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { movies } from '../data/movie'
const Home = () => {
    const navigate = useNavigate();

    const handleMovieClick = (id) => ()=> {
        console.log('Movie clicked')
        navigate(`/movie/${id}`)
    }
  return (
    <div>
        <Carousel />
        <div className='container flex flex-col mt-12 mx-auto'>
            <h2 className='text-4xl font-bold'>
                Now Showing
            </h2>
            <div className='flex flex-row flex-wrap gap-8 pt-4'>
                {
                    movies.map((movie, index) => (
                        <div key={index} onClick={handleMovieClick(movie.id)} className='w-1/6 cursor-pointer'>
                            <div className='relative'>
                                <img src={movie.cover} alt={movie.title} className='rounded-lg' />
                                <div className='absolute inset-0 bg-black hover:opacity-10 transition-all bg-opacity-40 rounded-lg' />
                                <div className='absolute inset-x-0 bottom-2 text-white text-center'>
                                    <p className='font-semibold'>{movie.title}</p>
                                    <p>IMDB Rating: {movie.rating}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Home