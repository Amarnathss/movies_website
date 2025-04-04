import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name :{
        type : String,
        trim : true,
        require : true,
        maxLength :32,
        unique:true,
    }
})

export default mongoose.model('Genre',genreSchema)