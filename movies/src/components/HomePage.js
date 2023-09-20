import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";

const HomePage = () => {
    const [Movies, setMovies] = useState([]);
    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.Movies))
            .catch((err) => console.log(err));
    }, []);
    // console.log(Movies);
    return (
        <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
            <Box width={"80%"} height={"40%"} margin={"auto"} padding={2}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrzAtkw_WdjFDhvnhEEsWcnqmEzQXsiqMBfdaQaWJM7UFJBPkoxaIXAGyn7hqw1xtYVE&usqp=CAU' alt="Jawan" width={"40%"} height={"100%"} />
            </Box>
            <Box padding={5} margin={"auto"} >
                <Typography variant='h4' textAlign={"center"}>
                    Latest Releases
                </Typography>
            </Box>
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
            <Box display={"flex"} padding={5} margin="auto">
                <Button LinkComponent={Link} to="/Movies" variant="outlined"
                    sx={{ margin: "auto", color: "#2b2d42" }}>
                    View all Movies
                </Button>
            </Box>
        </Box>
    )
}

export default HomePage