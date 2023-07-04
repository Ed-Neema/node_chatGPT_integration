const express = require("express");
const app = express();

// route
app.get("/", (req, res) => {
  res.send("hello from express server");
});

//port, callback function executed when server connected successfully
app.listen(8000, () => {
  console.log("Server started successfully");
});
