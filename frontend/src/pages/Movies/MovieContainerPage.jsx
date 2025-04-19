/* eslint-disable no-unused-vars */
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

    const handleGenreClick = (genreId)=>{
      setSelecetedGenre(genreId)
      
    }
    const filteredMovies = data?.filter((movie) => selecetedGenre === null || movie.genre === selecetedGenre )


  return (
    <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
      <nav className='ml-[4rem] flex flex-row xl:flex-col lg:flex-col md:flex-row sm:flex-row'>
        {genres?.map((g)=>(
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-gray-200 block p-2 rounded mb-[1rem] text-lg hover:text-black
              ${selecetedGenre === g._id ? "bg-gray-200 text-black" : ""} 
            `}
            onClick={()=>handleGenreClick(g._id)}
          >
            {g.name}
          </button>
        ))}
      </nav>
      <section className='flex flex-col justify-center items-center w-full lg:w-auto'>
        <div className='w-full lg:w-[100rem] mb-8'>
          <h1 className='mb-5'>Choose for you</h1>
          <SliderUtil data={randomMovie} />
        </div>
      

      <div className='w-full lg:w-[100rem] mb-8'>
        <h1 className='mb-5'>top movies</h1>
        <SliderUtil data={topMovie} />
      </div>

      <div className='w-full lg:w-[100rem] mb-8'>
        <h1 className='mb-5'>choose movie</h1>
        <SliderUtil data={filteredMovies} />
      </div>
      </section>
      
    </div>
  )
}

export default MovieContainerPage
