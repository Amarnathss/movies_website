import { createSlice } from "@reduxjs/toolkit";


const  moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesFilter : {
            searchTerm : "",
            selectedGenre : "",
            selectedYear: "",
            selectedSort: [],
        },

        filteredMovies : [],
        moviesYears: [],
        uniqueYear: [],
    },

    reducers :{
        setMovieFilter: (state , action)=> {
            state.moviesFilter = {...state.moviesFilter , ...action.payload}
        },
        setFilteredMovies : (state,action)=>{
            state.filteredMovies = action.payload
        },
        setMoviesYears : (state, action)=>{
            state.moviesYears = action.payload
        },
        setUniqueYears : (state , action)=>{
            state.uniqueYear = action.payload
        },
    }
});

export const {
    setMovieFilter,
    setFilteredMovies,
    setMoviesYears,
    setUniqueYears,
} = moviesSlice.actions;

export default moviesSlice.reducer;

