// connectdb.js
import mongoose from 'mongoose';

const connectDb=async()=>{
    try{
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI,{      
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, socketTimeoutMS: 30000 });
            console.log('MongoDB connected');
    }catch(error){
        console.error('Error connecting to MongoDB:', error);

    }
    
}

export default connectDb;
