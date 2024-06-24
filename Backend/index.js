import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";
import bodyParser from 'body-parser';
import contactUsRoute from "./route/contactUsRoute.js";



const app = express();

app.use(cors());
app.use(bodyParser.json()); // Middleware for parsing JSON

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define routes

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactUsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
