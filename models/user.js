const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator"); // this package is for validating the email (unique email)
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, ref: "Place" },
  email: { type: String, required: true, unique: true }, // create an index for the email to increace the query process
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true, ref: "Place" },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }], // the [] is for creating multible places
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
