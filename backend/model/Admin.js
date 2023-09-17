import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
    addedMovies: [{
        type: mongoose.Types.ObjectId,
        ref: "Movie"
    },
],
});

export default mongoose.model("Admin", schema)
