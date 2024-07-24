const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const app = express();
const routes = require('./app/routes/Routes');
require('dotenv').config()

const port =process.env.PORT || 3010
app.use(cors());

app.use(express.json());
app.use('/api', routes);

const DB = process.env.DB
mongoose.connect(DB)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my app" });
});

app.listen(port, () => {
  console.log("Server is running on port 3010");
});
