const mongoose = require("mongoose");
const { Configuration, OpenAIApi } = require("openai");

const bookSuggestions = async (req, res) => {
    const booksModel = mongoose.model("books");
    const getBooks = await booksModel.find({});
  // OPENAI
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

//   INITIALIZING OPENAI
  const openai = new OpenAIApi(configuration);

//   cannot send array to openai. convert to string
const prompt = "Give me 10 book suggestions based on these books: "+ getBooks.toString();
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
//   console.log(chatCompletion.data.choices[0].message);


  res.json({
    status: "hello from openAI",
    suggestions: chatCompletion.data.choices[0].message,
  });
};

module.exports = bookSuggestions;
