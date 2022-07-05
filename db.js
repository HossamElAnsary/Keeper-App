const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: String,
    content: String,
});

module.exports.Notes = mongoose.model("Notes", notesSchema);