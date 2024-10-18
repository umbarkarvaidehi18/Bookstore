import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: Number,
  name: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  price: Number,
  category: String,
  title: String,
  year: Number,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
