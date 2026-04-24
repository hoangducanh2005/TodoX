import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
        process.env.MONGODB_CONNECTIONSTRING
        );

        console.log("Connected to MongoDB successfully hehehe!");

    } catch(error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with an error code (1)
    }
    
};