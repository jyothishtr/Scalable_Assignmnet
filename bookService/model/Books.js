
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  title: String,
  published: Date,
  author: String,
	type:String,
  createdAt: Date,
  updatedAt: Date,
});



module.exports = mongoose.model("Book", bookSchema);
