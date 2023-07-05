const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const booksModel = mongoose.model("books");
  // getting the data
  const getBooks = await booksModel.find({
    // conditions. can leave it blank if there are no conditions or if you want to fetch all the books
    // author: "Robin Sharma",
    // rating:10
  });
  res.json({
    status: "success",
    data: getBooks,
  });
};

module.exports = getBooks;
