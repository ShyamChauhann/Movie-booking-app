// mongodb+srv://maharshibhagatji:<password>@cluster0.0590oc9.mongodb.net/?retryWrites=true&w=majority
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userroute from "./routes/user_route.js";
import adminroute from "./routes/admin_route.js"
import movieroute from "./routes/movie_route.js"
import bookingroute from "./routes/booking_route.js"

dotenv.config()
const app = express()


app.use(express.json())
app.use("/users", userroute)
app.use("/admin", adminroute)
app.use("/movie", movieroute)
app.use("/booking", bookingroute)

mongoose.connect(`mongodb+srv://maharshibhagatji:${process.env.PASSWORD}@cluster0.0590oc9.mongodb.net/?retryWrites=true&w=majority`
).then(() => app.listen(5000, () => console.log('connected')))
    .catch(e => cole.log(e))
// console.log('hi');

