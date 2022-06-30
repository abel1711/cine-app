import { Result } from '../../interface/dataMovie';

interface Props {
  movie: Result;
}


export const ShowFirstMovie = ({ movie }: Props) => {

    const baseUrlImage = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className='marco-image'  style={{ backgroundImage: `url('${baseUrlImage}${movie?.backdrop_path}')`}}>
      <div className="show-movie-container">
        <h2 className='show-movie-title'>{movie?.title}</h2>
        <p>{movie.overview ?movie.overview: null }</p>
      </div>
    </div>
  )
}
