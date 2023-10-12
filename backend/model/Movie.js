import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type: String,
        required:true, 
    },
    description: {
        type: String,
        required: true,
    },
    releaseDate: {
        type:Date,
        required:true,
    },
    posterUrl: {
        type:String,
        required:true,
    },
    featured: {
        type: Boolean,
    },
    bookings: [{type:mongoose.Types.ObjectId,ref:"Booking"}],
    admin:{
        type:mongoose.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
})

export default mongoose.model("Movie", schema)

//token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTQ5ZjQ1MzY3MTNhYzA5ZjI0ZmE5ZSIsImlhdCI6MTY5MjgwNjY5MCwiZXhwIjoxNjkyODkzMDkwfQ.gdeAvORIEKE8pADaIFH6JgkrHGFbC6Jwe_8Ai9vXjk4