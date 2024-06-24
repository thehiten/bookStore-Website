import mongoose, { Schema } from "mongoose";

// create Schema
const bookSchema = new Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
});

// create model
const Book = mongoose.model("Book", bookSchema);

export default Book;
