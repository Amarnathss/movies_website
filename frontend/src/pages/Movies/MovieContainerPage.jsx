import React,{useState} from 'react'
import {useGetNewMoviesQuery,useGetTopMoviesQuery,useGetRandomMoviesQuery} from "../../redux/api/movies"
import {useFetchGenresQuery} from "../../redux/api/genre";
import SliderUtil from '../../components/SliderUtil';

const MovieContainerPage = () => {
    const {data} = useGetNewMoviesQuery()
    const {data : topMovie} = useGetTopMoviesQuery()
    const {data: genres} = useFetchGenresQuery()
    const {data : randomMovie} = useGetRandomMoviesQuery()

    const [selecetedGenre , setSelecetedGenre] = useState(null);


  return (
    <div className='flex flex-col lg:flex-row lg:'>
      MovieContainerPage
    </div>
  )
}

export default MovieContainerPage
