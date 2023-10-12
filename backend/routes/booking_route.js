import express  from "express";
import { getBookingById, newBooking, deleteBooking } from "../controller/booking_controller";

const bookingroute = express.Router()

bookingroute.post('/',newBooking)
bookingroute.get('/:id',getBookingById)
bookingroute.delete('/:id',deleteBooking)

export default bookingroute
