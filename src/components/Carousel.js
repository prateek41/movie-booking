import React from 'react'
import Image3 from '../assets/images/brahma.jpg'
import Image1 from '../assets/images/img1.jpg'
import Image2 from '../assets/images/img2.jpg'

const images = [
    Image1,
    Image2,
    Image3
]
const Carousel = () => {
    const [currentImage, setCurrentImage] = React.useState(0)
    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setCurrentImage((prevImage) =>
                    prevImage === images.length - 1 ? 0 : prevImage + 1
                ),
            3000
        )

        return () => {
            resetTimeout()
        }
    }, [currentImage])

    const handleNext = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
    }

    const handlePrev = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
    }

    const handleDotClick = (index) => () => {
        setCurrentImage(index)
    }

  return (
    <div className='relative w-full sm:h-96 h-80 overflow-hidden'>
        {images.map((image, index) => (
            <div key={index} className={`absolute w-full h-full ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-in-out`}>
                <img src={image} alt='carousel' className='w-full h-full object-cover' />
            </div>
        ))}
        <button onClick={handlePrev} className='flex items-center justify-center absolute top-[calc(50%-20px)] left-10 text-white bg-gray-900 rounded-full w-12 h-12 opacity-30 transition-all hover:bg-gray-700 hover:opacity-100'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
        </button>

        <button onClick={handleNext} className='flex items-center justify-center absolute top-[calc(50%-20px)] right-10 text-white bg-gray-900 rounded-full w-12 h-12 opacity-30 transition-all hover:bg-gray-700 hover:opacity-100'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>    
        </button>

        <div className='absolute bottom-2 left-[calc(50%-50px)] text-white'>
            {images.map((_, index) => (
                <div key={index} onClick={handleDotClick(index)} className={`w-3 h-3 rounded-full bg-gray-900 inline-block mx-1 cursor-pointer ${index === currentImage && 'bg-white'}`}></div>
            ))}
        </div>
    </div>
  )
}

export default Carousel