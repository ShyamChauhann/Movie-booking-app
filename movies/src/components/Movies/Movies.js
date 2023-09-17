import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import { getAllMovies } from "../../api-helpers/api-helpers";
import MovieItem from './MovieItem';

const Movies = () => {
  // const [Movies, setMovies] = useState();
  // useEffect(() => {
  //   getAllMovies()
  //     .then((data) => setMovies(data.Movies)).catch((err) => console.log(err))
  // }, []);
  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((Data) => setMovies(Data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={'auto'} marginTop={4}>
      <Typography
        variant='h4'
        margin={"auto"}
        padding={2}
        width={"40%"}
        bgcolor={"#900c3f"}
        color={"white"}
        textAlign={"center"}>
        All Movies
      </Typography>
      <Box
        width={"100%"}
        margin={"auto"}
        marginTop={5}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}>
        {movies.map((movie, index) => (
          <MovieItem
            key={index}
            id={movie._id}
            posterUrl={movie.posterUrl}
            releaseDate={movie.releaseDate}
            title={movie.title}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Movies