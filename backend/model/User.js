import mongoose from "mongoose";

const schema = mongoose.Schema
const user = new schema({
    name:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    bookings:[{type: mongoose.Types.ObjectId,ref:"Booking"}],
})

export default mongoose.model("User", user)