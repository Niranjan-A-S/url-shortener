import mongoose from "mongoose"

export const connectToDB = async () => {
    try {
        const connectionString = process.env.MONGODB_URI;
        if (!connectionString) {
            throw new Error('MongoDB connection string is missing');
        }
        const connectionInstance = await mongoose.connect(connectionString, { dbName: 'url-shortener' });
        console.log(`\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`);
    } catch (error) {
        console.log('Failed to connect to DB', error);
        process.exit(1);
    }
}