import { Box } from '@mui/material'
import React from 'react'
import MovieItem from './MovieItem'

const Movies = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center" flexWrap="wrap">
      {[1, 2, 3, 4].map((item) => (<MovieItem key={item} />
      ))}
      {/* {movies &&
                    Movies
                        .slice(0, 4)
                        .map((movie, index) => (
                            <MovieItem
                                id={movie.id}
                                title={movie.title}
                                posterUrl={movie.posterUrl}
                                releaseDate={movie.releaseDate}
                                key={index}
                            />
                        ))} */}
    </Box>
  )
}

export default Movies