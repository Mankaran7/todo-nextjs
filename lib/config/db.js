import mongoose from "mongoose"

export const ConnectDb=async()=>{
    await mongoose.connect('mongodb+srv://mankaran:mankaran@cluster0.y6dy5de.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Db connected")
}