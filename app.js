const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const note = require(__dirname + "/note");



app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/note", note);

mongoose.connect('mongodb://localhost:27017/keeperAppDB');


app.get("/", (req, res) => {
    res.send(notes);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});