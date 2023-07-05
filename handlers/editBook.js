const mongoose = require("mongoose");

const editBook = async (req, res) => {
  const booksModel = mongoose.model("books");
  // client needs to send the id of the book to be edited, and field that needs to be edited
  //   1. id of the book to be updated
  // 2. fields to be updated
  await booksModel.updateOne({
    _id: req.body.book_id,
  },
  {
    book_name:req.body.book_name,
    rating: req.body.rating,
    author: req.body.author
  });

  res.json({
    status: "success",
    message: "modified successfully",
  });
};

module.exports = editBook;
