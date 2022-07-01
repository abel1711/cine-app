import { useState } from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { Result } from '../../interface/dataMovie';
import { RatingStars } from '../ui/RatingStars';

interface Props {
    movie: Result;
    selectMovie: ( id: number )=> void;
}



export const MovieCard = ({ movie, selectMovie }: Props) => {

    const [loading, setLoading] = useState(true);
    const baseUrlImage = 'https://image.tmdb.org/t/p/w500';
  return (

    <div className='card text-bg-dark card-movie' onClick={ ()=> selectMovie( movie.id ) }>
        {
          loading && <LoadingSpinner />
        }
        {
            movie.poster_path && <img src={`${baseUrlImage}${movie.poster_path}`} className='card-img-top' alt={movie.title} onLoad={ ()=> setLoading( false )} />
        }
        
        <div className="card-body">
        <h5 className="card-title">{ movie.title }</h5>
        <span>Popularidad: {movie.popularity}</span>
        <br />
        <span>vote-average: {movie.vote_average}</span>
        {/* <RatingStars value={ movie.vote_average}/> */}
        </div>
    </div>
  )
}
