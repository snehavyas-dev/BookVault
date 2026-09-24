const mongoose = require("mongoose");

/**
 * Connect to MongoDB database using Mongoose
 */
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        console.error("👉 If running locally, ensure MongoDB service is started (e.g. 'mongod' or Windows Services).");
        console.error("👉 If using MongoDB Atlas, check your network access IP whitelist and connection URI in .env.");
    }
};

module.exports = connectDB;

