const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/auth")
const userRouter = require("./routes/users")


// ==== create express app ====
const app = express();

// ==== base middleware ====
app.use(cors());
app.use(express.json());

// ==== routes ====
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

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