import { Action, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Result } from '../../interface/dataMovie';
import { DescriptionMovie } from '../../interface/dataDescriptMovie';

export interface MoviesState {
  movies: Result[];
  movieSelected: DescriptionMovie;
  filter:{
    active: boolean;
    moviesFiltered: Result[];
    rating: number;
  },
  modalOpen: boolean;

}

const initialState: MoviesState = {
  movies: [],
  movieSelected: { } as DescriptionMovie,
  filter: {
    active: false,
    moviesFiltered: [],
    rating: 0
  },
  modalOpen: false
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSelectMovie: (state, action)=>{
      state.movieSelected = action.payload
    },
    modalIsOpen: ( state, action )=>{
      state.modalOpen = action.payload
    },
    filtrarMovies:( state, action:PayloadAction<number> )=>{
      state.filter.active = (action.payload>0) ? true : false;
      state.filter.moviesFiltered = state.movies.filter( movie => (action.payload*2)-2 <= movie.vote_average && movie.vote_average <= action.payload*2);
      state.filter.rating = action.payload;

    }
  },
})

// Action creators are generated for each case reducer function
export const { addMovies, addSelectMovie, modalIsOpen, filtrarMovies } = moviesSlice.actions
