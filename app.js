const express = require("express");
const createBook = require("./handlers/createBook");
const deleteBook = require("./handlers/deleteBook");
const editBook = require("./handlers/editBook");
const getBooks = require("./handlers/getBooks");
const mongoose = require("mongoose")
require("dotenv").config();
// models
require("./models/booksModel");

const app = express();

mongoose.connect(process.env.MONGO_DB,{}).then(()=>{
    console.log("Connection to MongoDB successful");
}).catch(()=>{
  console.log("Connection to MongoDB failed")
})


// Routes
app.post("/api/books", createBook);
app.patch("/api/books", editBook);
app.delete("/api/books", deleteBook);
app.get("/api/books", getBooks);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

