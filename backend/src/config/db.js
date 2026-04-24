import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
        "mongodb+srv://hoangducanh2005_db_user:LE2Hm4N1bMuWrQat@cluster0.7mdbnbk.mongodb.net/dev?appName=Cluster0"
        );

        console.log("Connected to MongoDB successfully!");

    } catch(error) {
        console.error("Error connecting to MongoDB:", error);
    }
    
};