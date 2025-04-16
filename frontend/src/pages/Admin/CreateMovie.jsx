/* eslint-disable no-unused-vars */
import React from 'react'
import {useEffect , useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import {useCreateMovieMutation,useUploadImageMutation} from "../../redux/api/movies"
import {useFetchGenresQuery} from "../../redux/api/genre"
import {toast} from "react-toastify"


const CreateMovie = () => {
    const navigate = useNavigate()

    const [movieData, setMovieData]= useState({
        name : "",
        year : 0,
        detail: "",
        cast: [],
        rating : 0,
        image: null,
        genre: ""
    })
    const [selectedImage , setSelectedImage]=useState(null)

    const [createMovie,{isLoading:isCreatingMovie, error: createMovieErrorDetail}] = useCreateMovieMutation()
    const [uploadImage , {isLoading : isUploadingImage, error:uploadImageErrorDetails}] = useUploadImageMutation();

    const {data:genres , isLoading: isLoadingGenres} = useFetchGenresQuery()
    
    useEffect(()=>{
        if(genres){
            setMovieData((prev)=>({
                ...prev , genre:genres[0]?.id || "",
            }))
        }
    },[genres]);








  return (
    <div className='container  flex justify-center items-center mt-4'>
     <form>
        <p className='text-green-200 w-[40rem] text-2xl mb-4 '> createMovie</p>
        <div className='mb-4'>
            <label className='block'>
                name:
                <input 
                    type="text"
                    name='name'
                    value={movieData.name}
                    // onChange={handleChange}
                    className='border px-2 py-1 w-full'
                 />
            </label>
        </div>
        <div className='mb-4'>
            <label className='block'>
                year:
                <input 
                    type="number"
                    name='year'
                    value={movieData.year}
                    // onChange={handleChange}
                    className='border px-2 py-1 w-full'
                 />
            </label>
        </div>
        <div className='mb-4'>
            <label className='block'>
                details:
                <textarea 
                    name="detail" 
                    value={movieData.detail}
                    // onChange={handleChange}
                    className='border px-2 py-1 w-full'
                ></textarea>
            </label>
        </div>
        <div className='mb-4'>
            <label className='block'>
                cast (coma-seperated):
                <input 
                    type="number"
                    name='cast'
                    value={movieData.cast.join(", ")}
                    onChange={(e)=> setMovieData({...movieData,cast:e.target.value.split(", ")})}
                    className='border px-2 py-1 w-full'
                 />
            </label>
        </div>
        <div className='mb-4'>
            <label className='block'>
                genre:
                <select name="genre" 
                    value={movieData.genre}
                    // onChange={hangleChange}
                    className='border px-2 py-1 w-full'
                >
                    {isLoadingGenres 
                     ? 
                        (<option value="">loading genres</option>)
                     :
                        (genres.map((genre)=> (
                            <option key = {genre._id} value={genre._id}>{genre.name}</option>
                        ) )) 
                     }
                </select>
            </label>
        </div>
        <div className='mb-4' >
            <label style={!selectedImage 
                ? {border: "1px solid #888" , borderRadius : "5px",padding : "8px"}
                :{ border : "0" , borderRadius : "0",padding : "0",}
            } >
                {!selectedImage && "upload image"}
                <input 
                    type="file"
                    accept='image/*'
                    // onChange={handleImageChange}
                    style={{display : !selectedImage ? "none" : "block"}}
                 />
            </label>
        </div>
        <button
            type='button'
            // onClick={handleCreateMovie}
            className='bg-teal-500 text-white px-4 py-2 rounded'
            disabled = {isCreatingMovie || isUploadingImage}
         >
           {isCreatingMovie || isUploadingImage ? "creating..." : " create movie"} 
        </button>
     </form>
    </div>
  )
}

export default CreateMovie
