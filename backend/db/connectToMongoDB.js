import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("Connected to DB")
    }catch(error) {
        console.log("Error occured while connecting to MONGODB", error.message)
    }
}

export default connectToMongoDB