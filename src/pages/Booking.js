import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TicketPrice, availableTimings, movies, seatings } from '../data/movie';

const Booking = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {id} = params;
    const [seats, setSeats] = React.useState([]);
    const [showTiming, setShowTiming] = React.useState(0);
    const [selectedSeats, setSelectedSeats] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [continuePayment, setContinuePayment] = React.useState(false);

    const randomizeSeats = () => {
      const newSeats = [...seatings];
      newSeats.forEach((row) => {
        row.forEach((seat) => {
          seat.booked = Math.random() > 0.5;
        });
      });
      setSeats(newSeats);
    }
  
    const handleSelectTiming = (id) => () => {
      setShowTiming(id);
      randomizeSeats();
      setSelectedSeats([]);
    }
  
    const handleSelectSeat = (id) => () => {
      setSelectedSeats((prevSeats) => {
        if (prevSeats.includes(id)) {
          return prevSeats.filter((seat) => seat !== id);
        }
        return [...prevSeats, id];
      })
    }
  
    React.useEffect(() => {
      randomizeSeats();
    }, []);

    const showPayment = () => {
        setContinuePayment(true);
    }

    const handlePayment = () => {
        navigate('/success', {
            replace: true,
        });
    }

    const movie = React.useMemo(() => {
        return movies.find((movie) => movie.id === Number(id));
      }, [id]);

    const showTime = React.useMemo(() => {
        return availableTimings.find((timing) => timing.id === showTiming);
    });
  
    return (
      <div className='w-full max-w-[60rem] mt-8 mx-auto flex-col items-start justify-center'>
            <h2 className='text-4xl font-bold text-center'>
                Book Ticket
            </h2>
            {
                !continuePayment && (
                <>
                
                    <h2 className='text-xl font-bold'>
                        Show Timings
                    </h2>
                    <div className='flex gap-4 flex-wrap mt-2'>
                    {
                        availableTimings.map((timing, index) => (
                        <button key={index} onClick={handleSelectTiming(timing.id)} className={'flex items-center justify-center bg-green-600 rounded ' + (showTiming === timing.id ? '!bg-blue-500' : '')}>
                            <p className='text-white text-lg p-1'>{timing.time}</p>
                        </button>
                        ))
                    }
                    </div>
                    <h2 id='book' className='text-xl font-bold mt-4'>
                        Seats (Show Timing - {showTime.time})
                    </h2>
                    <div className='mt-8 w-full flex flex-col items-center justify-center gap-10'>
                    <div className='mx-auto w-[25rem] h-[3rem] flex items-center justify-center bg-gray-500 rounded'>
                        <p className='text-white font-bold text-2xl'>Screen</p>
                    </div>
                    
                    <div>
                        {
                            seats.map((row, index) => (
                            <div key={index} className='flex flex-row gap-2 m-4'>
                                {
                                    row.map((seat, index) => (
                                    <div key={index} onClick={seat.booked === false ? handleSelectSeat(seat.id) : undefined} className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded ${seat.booked ? 'bg-gray-500' : 'bg-green-500'} ${selectedSeats.includes(seat.id) ? '!bg-blue-500' : ''}`}>
                                        <p className='text-white'>{seat.seat}</p>
                                    </div>
                                    ))
                                }
                            </div>
                            ))
                        }
                    </div>
                    <div className='flex flex-row gap-2'>
                        Seats: 
        
                        <div className='flex gap-2 items-center justify-center'>
                            <div className='bg-green-500 w-5 h-5 rounded'></div>
                            <p>Available</p>
                        </div>
        
                        <div className='flex gap-2 items-center justify-center'>
                            <div className='bg-gray-500 w-5 h-5 rounded'></div>
                            <p>Not Available</p>
                        </div>
        
                        <div className='flex gap-2 items-center justify-center'>
                            <div className='bg-blue-500 w-5 h-5 rounded'></div>
                            <p>Selected</p>
                        </div>
                    </div>
                    <p className='font-semibold'> 
                        Selected Seats: {selectedSeats.map((seat) => {
                        const seatNumber = seats.flat().find((s) => s.id === seat).seat;
                        return `${seatNumber}`;
                        }).join(', ')}
                    </p>
                    <button disabled={selectedSeats.length === 0} onClick={showPayment} className={'bg-blue-600 text-xl font-semibold hover:bg-blue-700 text-white p-3 px-12 rounded-3xl ' + (selectedSeats.length === 0 ? '!bg-gray-300' : '')}>
                        Continue to Pay
                    </button>
                    </div>
                </>
             )}
             {
                continuePayment && (
                <div className='flex flex-col items-center justify-center gap-4 mt-4'>
                    <div className='flex flex-wrap gap-4'>
                        <img src={movie.cover} alt={movie.title} className='w-10 rounded'/>
                        <div>
                            <h2 className='text-2xl font-bold'>
                                {movie.title}
                            </h2>
                            <p className='text-lg'>
                                {showTime.time}
                            </p>
                        </div>
                    </div>

                    <p className='font-semibold'> 
                        Selected Seats: {selectedSeats.map((seat) => {
                        const seatNumber = seats.flat().find((s) => s.id === seat).seat;
                        return `${seatNumber}`;
                        }).join(', ')}
                    </p>
                    <h2 className='text-2xl font-bold'>
                        Total Price: ₹{selectedSeats.length * TicketPrice}
                    </h2>
                    <button onClick={handlePayment} className='bg-blue-600 text-xl font-semibold hover:bg-blue-700 text-white p-3 px-12 rounded-3xl'>
                        Pay
                    </button>
                </div>
                )
             }
          </div>
    )
}

export default Booking