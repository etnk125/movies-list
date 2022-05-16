import React from 'react'
import { MovieProps } from '../interface/MovieProps'



function List({ movieList }: { movieList: MovieProps["movieList"] }) {
  return (
    <>
      <h2>List</h2>
      <div className='movie-list'>
        {movieList?.map((movie: MovieProps["movieList"][0]) => {
          return (
            <div className='movie-item' key={movie.Id}>
              <div className='movie-item-cover'>
                <img src={movie.Cover} alt={movie.Title} />
              </div>
              <div className='movie-item-info'>
                <h3>{movie.Title}</h3>
                <p>{movie.Genre}</p>
                <p>{movie.IMDB}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default List