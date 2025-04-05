/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import {useCreateGenreMutation,useUpdateGenreMutation,useDeleteGenreMutation,useFetchGenresQuery} from "../../redux/api/genre.js"
import {toast} from "react-toastify";
import GenreForm from '../../components/GenreForm.jsx';
import Modal from '../../components/Modal.jsx';
import { data } from 'react-router';


const GenreList = () => {
    const {data: genres, refetch} = useFetchGenresQuery()
    const [name , setName] = useState('')
    const [selectedGenre,setSelectedGenre]= useState('');
    const [updateingName,setUpdatingName]=useState('');
    const [modelVisible,setModelVisible]=useState(false);

    const [createGenre] =useCreateGenreMutation()
    const [updateGenre]=useUpdateGenreMutation();
    const [deleteGenre]=useDeleteGenreMutation();
    
    const handleCreateGenre = async (e)=>{
        e.preventDefault()
        if(!name){
            toast.error("Genre name is required")
            return;
        }
        try{
            const result = await createGenre({name}).unwrap()

            if(result.error){
                toast.error(result.error)
            }
            else{
                setName('')
                toast.success(`${result.name} is created`);
                refetch({ force: true });
            }
        }
        catch(err){
            console.error(err);
            toast.error("creating genre failed , try again")
        }
    }

    const handleUpdateGenre = async (e)=>{
        e.preventDefault()
        if(!updateingName){
            toast.error("genre name is required")
            return;
        }
        try {
            const result = await updateGenre({
                id:selectedGenre._id,
                updateGenre:{
                    name :updateingName,
                }
            }).unwrap()
            if(result.error){
                toast.error(result.error)
            }else{
                toast.success(`${result.name} is updated`)
                refetch({ force: true });
                setSelectedGenre(null)
                setUpdatingName("")
                setModelVisible(false)
            }

        } catch (error) {
            console.error(error);
        }
    }
    
    const handleDeleteGenre = async (e)=>{
        try {
            const result = await deleteGenre(selectedGenre._id).unwrap()
            if(result.error){
                toast.error(result.error)
            }
            else{
                toast.success(`${result.name} is deleted.`)
                refetch()
                setSelectedGenre(null)
                setModelVisible(false)
            }
        } catch (error) {
            console.log(error);
            toast.error("genre deletion failed. try again.")

        }
    }

    return (
        <div className='ml-[10rem] flex flex-col md:flex-row'>
            <div className="md:w-3/4 p-3">
                <h1 className='h-12 '>Manage Genres</h1>
                <GenreForm 
                    value={name} 
                    setValue={setName} 
                    handleSubmit = {handleCreateGenre} 
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
                        handleSubmit = {handleUpdateGenre}
                        buttonText='Update'
                        handleDelete={handleDeleteGenre} 
                    />
                </Modal>
            </div>
        
        </div>
    )
}

export default GenreList
