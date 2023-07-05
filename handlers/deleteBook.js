const mongoose = require("mongoose");

const deleteBook = async (req,res) =>{
  const booksModel = mongoose.model("books");
  // find the book by id and remove it from database
  console.log(req.params); //{ book_id: '64a4884af298d96a40dcc23d' }
  await booksModel.deleteOne({
    _id: req.params.book_id,
  });

  res.json({
    status: "success",
    message: "Book Deleted Successfully"
  })
}

module.exports = deleteBook;