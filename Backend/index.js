import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();


import bookRoute from './route/book_route.js'
import userRoute from './route/user_route.js'

// MiddleWare
app.use(cors());
app.use(express.json());


// Load environment variables
dotenv.config();

// Configurations
const port = process.env.PORT || 4000;
const URL = process.env.MongoDBURI;

// Connect to MongoDB
try {
  await mongoose.connect(URL);
  console.log("Connected to mongoDB");

  // // Insert a new book if the database is empty since file is not being created when the collection is empty

  // const existingBooks = await Book.find();
  // if (existingBooks.length === 0) {
  //   const sampleBook = new Book({
  //     name: "The Great Gatsby",
  //     price: 15,
  //     category: "Classic",
  //     image: "gatsby.jpg",
  //     title: "The Great Gatsby"
  //   });

  //   await sampleBook.save();
  //   console.log("Sample book added to the database");
  // }


} catch (error) {
  console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
