import express from "express"
import { addmovie,getAllMovies, getMovieById } from "../controller/movie_controller"
const movieroute = express.Router()

movieroute.post("/",addmovie)
movieroute.get("/",getAllMovies)
movieroute.get("/:id",getMovieById)

export default movieroute 