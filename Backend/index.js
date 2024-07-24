const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Corrected import for CORS
const app = express();
const routes = require('./app/routes/Routes');

app.use(cors()); // Use the correct middleware

app.use(express.json());
app.use('/api', routes);

const DB = "mongodb+srv://abhimanav06:ZLzsKi9x93P9511A@attryb.nsyfijk.mongodb.net/Attryb?retryWrites=true&w=majority&appName=Attryb";

mongoose.connect(DB)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my app" });
});

app.listen(3010, () => {
  console.log("Server is running on port 3010");
});
