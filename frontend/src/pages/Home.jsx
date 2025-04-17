import React from 'react'
import Header from './Movies/Header'
import MovieContainerPage from './Movies/MovieContainerPage'

function home() {
  return (
    <>
      <Header />
      <section className='mt-[10rem]'>
        <MovieContainerPage />
      </section>
    </>
  )
}

export default home
