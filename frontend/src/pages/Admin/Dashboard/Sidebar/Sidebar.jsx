import React from 'react'
import  {Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='-translate-y-10 flex h-screen fixed mt-10 border-r-2 border-[#232323]'>
        <aside className='text-white w-64 flex-shrink-0'>
            <ul className='py-4'>
                <li className='text-lg bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6'>
                    <Link 
                        to="/admin/movies/dashboard"
                        className='block p-2 ml-20 mb-10'
                    >
                        Dashboard
                    </Link>
                </li>

                <li className='text-lg hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6'>
                    <Link 
                        to="/admin/movies/create"
                        className='block p-2 ml-20 mb-10'
                    >
                        create movie
                    </Link>
                </li>
                <li className='text-lg hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6'>
                    <Link 
                        to="/admin/movies/genre"
                        className='block p-2 ml-20 mb-10'
                    >
                        create genre
                    </Link>
                </li>
                <li className='text-lg hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6'>
                    <Link 
                        to="/admin/movies-list"
                        className='block p-2 ml-20 mb-10'
                    >
                        update movies
                    </Link>
                </li>
                <li className='text-lg hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6'>
                    <Link 
                        to="/admin/movies/comments"
                        className='block p-2 ml-20 mb-10'
                    >
                        comments
                    </Link>
                </li>
            </ul>

        </aside>
    </div>
  )
}

export default Sidebar
