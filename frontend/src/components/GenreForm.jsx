/* eslint-disable no-unused-vars */
import React from 'react'

const GenreForm = ({value ,setValue ,handleSubmit,buttonText = 'Submit', handleDelete}) => {
  return (
    <div className='p-3'>
      <form onSubmit={handleSubmit} 
        className='space-y-3'>
            <input type="text" name="" id="" 
                className='py-3 px-4 border rounded-lg w-[40rem]'
                placeholder='write genre name'
                value={value}
                onChange={(e)=> setValue(e.target.value)}
            />
        <div className="flex justify-between">
            <button
                type="submit" 
                className='bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50'
            >
                {buttonText}
            </button>
            {handleDelete && (
                <button onClick={handleDelete}
                    className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
                 >
                    Delete
                 </button>
            )}
        </div>
      </form>
    </div>
  )
}

export default GenreForm
