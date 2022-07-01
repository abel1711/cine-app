import { useEffect, useState } from 'react';
import { Result} from './interface/dataMovie';
import { MovieCard } from './components/movie/MovieCard';
import { Navbar } from './components/ui/Navbar';
import { fetchMovies, fetchMovieDescript } from './helpers/fetchMovies';
import { ShowFirstMovie } from './components/movie/ShowFirstMovie';

import './App.css';
import { ModalDescript } from './components/ui/ModalDescript';
import { DescriptionMovie } from './interface/dataDescriptMovie';
import { FiltroRating } from './components/ui/FiltroRating';
import { useAppDispatch, useAppSelector } from './store/storeHook/hook';
import { addMovies, addSelectMovie, modalIsOpen } from './store/slices/moviesSlice';
import { Footer } from './components/ui/Footer';

function App() {

  const [firstMovie, setFirstMovie] = useState<Result>();

  const dispatch = useAppDispatch();
  const { movies, movieSelected, modalOpen, filter } = useAppSelector((state)=> state.cineApp)

  const dataMovies = async( search?: string)=>{
      const { results } = await fetchMovies(search);
      dispatch(addMovies(results));
      setFirstMovie(results[0]);
  };

  const descriptMovie = async (id: number )=>{
      const descript = await fetchMovieDescript(id);
      dispatch(addSelectMovie( descript ));
      dispatch(modalIsOpen(true));
  };

  useEffect(() => {
    dataMovies();
  }, []);
  
  return (
    <>
      {
       !!firstMovie && firstMovie.backdrop_path && <ShowFirstMovie movie={ firstMovie }/>
      }
      <div className='bg-dark text-white container-fluid'>
        <Navbar search={ dataMovies } />
        <FiltroRating />
        <div className="card-movies-container">
          {   filter.active ? 
                            filter.moviesFiltered.map( movie => (
                                <MovieCard key={movie.id} movie={ movie } selectMovie={ descriptMovie } />
                              ))
                            :
                            movies?.map( movie => (
                            <MovieCard key={movie.id} movie={ movie } selectMovie={ descriptMovie } />
                            ))
          }
        </div>
        <Footer />
        <div>
          {
            movieSelected && modalOpen && <ModalDescript movie={movieSelected} show={ modalOpen }/>
          }
        </div>
      </div>
    </>
  );
}

export default App;
