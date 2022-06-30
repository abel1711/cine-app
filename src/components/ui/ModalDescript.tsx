import { DescriptionMovie } from '../../interface/dataDescriptMovie';

interface Props {
    movie: DescriptionMovie;
    show: boolean;
    setShow: (show:boolean)=> void;

}

export const ModalDescript = ({movie, show, setShow }:Props) => {

    const baseUrlImage = 'https://image.tmdb.org/t/p/w1280';

  return (
    <div className={`custon-modal-container ${ show ? 'show': ''}`}>
        <div className="custon-modal-background">
            <div className="custon-modal">
                <div className="custon-modal-title-container">
                    <h2>{ movie.title }</h2>
                    <button type="button" className="btn-close" onClick={()=> setShow( false )}></button>
                </div>
                    {
                        movie.backdrop_path && <img src={`${baseUrlImage}${movie.backdrop_path}`} className='' width={'100%'} alt="" />
                    }
                <div className="custon-modal-body">
                    <h3>Descripcion:</h3>
                    <p className='mt-3'>Lanzamiento: <span>{movie.release_date}</span></p>
                    <p>Titulo original: <span>{movie.original_title}</span></p>
                    <p>{movie.overview}</p>
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
