import { DescriptionMovie } from '../../interface/dataDescriptMovie';
import { modalIsOpen } from '../../store/slices/moviesSlice';
import { useAppDispatch } from '../../store/storeHook/hook';

interface Props {
    movie: DescriptionMovie;
    show: boolean;
}

export const ModalDescript = ({movie, show }:Props) => {

    const baseUrlImage = 'https://image.tmdb.org/t/p/w1280';

    const dispatch = useAppDispatch();

  return (
    <div className={`custon-modal-container ${ show ? 'show': ''}`}>
        <div className="custon-modal-background">
            <div className="custon-modal">
                <div className="custon-modal-title-container">
                    <h2>{ movie.title }</h2>
                    <button type="button" className="btn-close" onClick={()=> dispatch(modalIsOpen(false))}></button>
                </div>
                    {
                        movie.backdrop_path && <img src={`${baseUrlImage}${movie.backdrop_path}`} className='' width={'100%'} alt="" />
                    }
                <div className="custon-modal-body">
                    <h3 className='mt-2'>Descripcion:</h3>
                    <span>{movie.tagline}</span>
                    <p>{movie.overview}</p>
                    <p className='mt-3'>Lanzamiento: <span>{movie.release_date}</span></p>
                    <p>Titulo original: <span>{movie.original_title}</span></p>
                    <p>Lenguaje original: <span>{movie.original_language}</span></p>
                    <p>Popularidad: <span>{movie.popularity}</span></p>
                    <p>Rating: <span>{movie.vote_average} de {movie.vote_count} votos</span></p>
                    <h4>Genero/s</h4>
                    <ul className='list-group w-50'>
                        {movie.genres.map(( {id, name} )=>(
                            <li key={ id } className='list-group-item'>{ name }</li>
                        ))} 
                    </ul>
                    <h4 className='mt-3'>Productoras:</h4>
                    <ul className="list-group w-50">
                        {
                            movie.production_companies.map( ({name, id}) => (
                                <li className="list-group-item" key={id}>{name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
