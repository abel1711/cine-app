import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store/storeHook/hook';
import { filtrarMovies } from '../../store/slices/moviesSlice';

export const RatingStars = () => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filtrarMovies(rating));
  }, [rating])
  
  return (
    <div>
        {
            [...Array(5)].map( (star, index)=>{

                const ratingValue = index + 1;

                return (
                    <label key={ index }>
                        <input 
                          type="radio" 
                          name="rating" 
                          value={ ratingValue } 
                          onClick={()=>setRating((ratingValue === rating)? 0 : ratingValue)} 
                        />

                        <FaStar 
                          className='star' 
                          color={ ratingValue <=( hover || rating )? '#ffc107' : '#e4e5e9'} 
                          onMouseEnter={()=> setHover(ratingValue)}
                          onMouseLeave={()=> setHover(0)}
                        />

                    </label>
            )})
        }
    </div>
  )
}
