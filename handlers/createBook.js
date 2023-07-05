const mongoose = require("mongoose");
const booksModel = require("../models/booksModel");

const createBook = async (req ,res) => {
  // access to books model
  const booksModel = mongoose.model("books")
  await booksModel.create({
    book_name: req.body.book_name,
    author: req.body.author,
    rating: req.body.rating,
  })
  // console.log(req.body)
  res.json({
    status: "success",
    message:"book created successfully"
  });
};

module.exports = createBook;