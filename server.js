const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


// ==== create express app ====
const app = express();

// ==== base middleware ====
app.use(cors());

// ==== connect to DB ====
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log(`Error connect to MongoDB! : ${error}`);
    }
}

// ==== method for server start ====
const startServer = async() => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`✅ Server running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("❌ Error server running!");
    }
}

startServer();