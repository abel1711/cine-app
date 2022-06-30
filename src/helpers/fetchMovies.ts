import axios from "axios";
import { DataMovie } from "../interface/dataMovie";
import { DescriptionMovie } from '../interface/dataDescriptMovie';


const BASE_API_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async ( search?: string )=>{

    
    if( search ){
        
        const { data } = await axios.get(`${BASE_API_URL}/search/movie`, {
            params:{
              api_key: process.env.REACT_APP_MOVIE_API_KEY,
              query: search,
              language: 'es'
            }
          })
          return data;
    } else{

        const { data } = await axios.get<DataMovie>(`${BASE_API_URL}/discover/movie`, {
          params:{
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            language:'es'
          }
        })

        return data;
    }

    
  }

export const fetchMovieDescript = async ( id: number )=>{

  const {data} = await axios.get<DescriptionMovie>(`${BASE_API_URL}/movie/${id}`, {
          params:{
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            language: 'es'
          }
        })
        
  return data;
}