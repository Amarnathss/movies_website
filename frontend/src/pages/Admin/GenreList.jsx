/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import {useCreateGenreMutation,useUpdateGenreMutation,useDeleteGenreMutation,useFetchGenresQuery} from "../../redux/api/genre.js"
import {toast} from "react-toastify";
import GenreForm from '../../components/GenreForm.jsx';
import Modal from '../../components/Modal.jsx';
import { data } from 'react-router';


const GenreList = () => {
    const {data: genres, refresh} = useFetchGenresQuery()
    const [name , setName] = useState('')
    const [selectedGenre,setSelectedGenre]= useState('');
    const [updateingName,setUpdatingName]=useState('');
    const [modelVisible,setModelVisible]=useState(false);

    const [createGenre] =useCreateGenreMutation()
    const [updateGenre]=useUpdateGenreMutation();
    const [deleteGenre]=useDeleteGenreMutation();
    


    return (
        <div className='ml-[10rem] flex flex-col md:flex-row'>
            <div className="md:w-3/4 p-3">
                <h1 className='h-12 '>Manage Genres</h1>
                <GenreForm 
                    value={name} 
                    setValue={setName} 
                    // handleSubmit = {handleCreateGenre} 
                />
                <br />
                <div className="flex flex-wrap">
                    {genres?.map((genre)=>(
                        <div key={genre._id} >
                            <button className='bg-white border border-teal-500 text-teal-500 py-2 px-4 rounded-lg hover:bg-teal-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 mr-2'
                                onClick={()=>{
                                    setModelVisible(true)
                                    setSelectedGenre(genre)
                                    setUpdatingName(genre.name)

                                    
                                }}
                            >
                                {genre.name}
                            </button>
                        </div>
                    ))}
                </div>
                <Modal isOpen ={modelVisible} onClose={()=> setModelVisible(false)}>
                    <GenreForm 
                        value={updateingName}   
                        setValue={(value)=>setUpdatingName(value)}
                        // handleSubmit = {handleUpdateGenre}
                        buttonText='Update'
                        // handleDelete={handleDeleteGenre} 
                    />
                </Modal>
            </div>
        
        </div>
    )
}

export default GenreList
