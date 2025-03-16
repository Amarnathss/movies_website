import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`successfully connect to mongoDB database`);

    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB