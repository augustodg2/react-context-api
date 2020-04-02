import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

const MovieList = () => {
const [ movies ] = useContext(MovieContext)

  return (
    <ul>
      { movies.map( movie => (
        <Movie
          key={movie.id}
          name={movie.name}
          price={movie.price}
        />
      )) }
    </ul>
  )
}

export default MovieList
