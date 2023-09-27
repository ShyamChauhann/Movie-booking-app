import mongoose from "mongoose"
import Bookings from "../model/Bookings"
import Movie from "../model/Movie"
import User from "../model/User"


export const newBooking = async(req,res,next) => {
    const {movie,date,seatNumber,user} = req.body
    console.log({ movie, date, seatNumber, user });

    let exe_movie
    let exe_user
    try{
        exe_movie = await Movie.findById(movie)
        exe_user = await User.findById(user)
    }catch(err){
        return console.log(err)
    }
    if(!exe_movie){
        return res.status(400).json({message:"Movie not found"})
    }
    if(!exe_user){
        return res.status(400).json({message:"User not found"})
    }

    let booking
    try{
        booking = new Bookings({
            movie,
            date: new Date(`${date}`),
            seatNumber,
            user,
        })
        const session = await mongoose.startSession()
        session.startTransaction()
        exe_user.bookings.push(booking)
        exe_movie.bookings.push(booking)
        await exe_user.save({session})
        await exe_movie.save({session})
        await booking.save({session})
        session.commitTransaction()
    }catch(err){
        return console.log(err)
    }
    if(!booking){
        return res.status(400).json({message:"Unable to create booking"})
    }

    return res.status(200).json({booking})
}

export const getBookingById = async(req,res,next) => {
    const id = req.params.id
    let booking
    try{
        booking = await Bookings.findById(id)

    }catch(err){
        return console.log(err)
    }
    if(!booking){
        return res.status(400).json({message:"Booking Not Found"})
    }
    return res.status(200).json({booking})
}

export const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    let booking;
    try {
      booking = await Bookings.findByIdAndRemove(id).populate("user movie");
      console.log(booking);
      const session = await mongoose.startSession();
      session.startTransaction();
      await booking.user.bookings.pull(booking);
      await booking.movie.bookings.pull(booking);
      await booking.movie.save({ session });
      await booking.user.save({ session });
      session.commitTransaction();
    } catch (err) {
      return console.log(err);
    }
    if (!booking) {
      return res.status(500).json({ message: "Unable to Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
};