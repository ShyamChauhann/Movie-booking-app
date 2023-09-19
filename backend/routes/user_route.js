import express from "express"
import {getAllBookings,deleteUser, getAllUsers, login, signup, updateUser } from "../controller/user_controller"

const userroute = express.Router()

userroute.get("/",getAllUsers);
userroute.post("/signup", signup);
userroute.put("/:id",updateUser);
userroute.delete("/:id",deleteUser);
userroute.post("/login",login);
userroute.get("/bookings/:id",getAllBookings);

export default userroute;