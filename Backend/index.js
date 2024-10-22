import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";
import contactUsRoute from "./route/contactUsRoute.js";
import path from "path";

// Initialize dotenv before using environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // No need to use body-parser separately

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define routes
const __dirname = path.resolve();

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactUsRoute);

// Serve frontend from the "dist" folder
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});