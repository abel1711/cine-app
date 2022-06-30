import { useEffect, useState } from 'react';
import { Result, DataMovie } from './interface/dataMovie';
import { MovieCard } from './components/movie/MovieCard';
import { Navbar } from './components/ui/Navbar';
import { fetchMovies, fetchMovieDescript } from './helpers/fetchMovies';
import { ShowFirstMovie } from './components/movie/ShowFirstMovie';

import './App.css';
import { ModalDescript } from './components/ui/ModalDescript';
import { DescriptionMovie } from './interface/dataDescriptMovie';

function App() {

  const [movies, setMovies] = useState<Result[]>();
  const [showFirstMovie, setShowFirstMovie] = useState<Result>();
  const [movieDescription, setMovieDescription] = useState<DescriptionMovie>()
  const [showModal, setShowModal] = useState(false);

  const dataMovies = async( search?: string)=>{

      const { results } = await fetchMovies(search);

      console.log(results)
      setMovies( results );
      setShowFirstMovie( results[0]);

  }

  const descriptMovie = async (id: number )=>{

      const descript = await fetchMovieDescript(id);
      setMovieDescription(descript);
      setShowModal( true );

      
  }

  useEffect(() => {
    dataMovies();
  }, [])
  
  return (
    <>
      {
        showFirstMovie?.backdrop_path && <ShowFirstMovie movie={ movies![0] }/>
      }
      <div className='bg-dark text-white container-fluid'>
        <Navbar search={ dataMovies } />
        <div className="card-movies-container">
          {
              movies?.sort((movie1, movie2)=> movie2.popularity - movie1.popularity).map( movie => (
              <MovieCard key={movie.id} movie={ movie } selectMovie={ descriptMovie } />
              ))
          }
        </div>
        <div>
          {
            movieDescription && showModal && <ModalDescript movie={movieDescription} show={ showModal } setShow={ setShowModal }/>
          }
        </div>
      </div>
    </>
  );
}

export default App;
