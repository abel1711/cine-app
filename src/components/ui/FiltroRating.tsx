import { RatingStars } from './RatingStars';
import { useAppSelector } from '../../store/storeHook/hook';


export const FiltroRating = () => {

  const {active, rating, moviesFiltered} = useAppSelector(state=> state.cineApp.filter);

  return (
    <div className='container-filtro'>
      <div className='container-stars'>
        <span>Filtrar por valoraciones</span>
        <RatingStars />
      </div>
      <div className='filtro-message'>
        { 
          (moviesFiltered.length>0) 
            ? (active && <h6 className='text-success'>Mostrando {moviesFiltered.length} peliculas con valoraciones de {(rating*2)-2} a {rating*2}</h6>)
            : (active && <h6 className='text-danger'>No hay peliculas de {(rating*2)-2} a {rating*2}</h6>)
        }
        
      </div>
    </div>
  )
}
