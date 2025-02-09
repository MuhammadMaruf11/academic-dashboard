import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected.");
    return;
  }

  console.log("Connecting to MongoDB...", process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Database connection failed");
  }
};

export default connectDB;
