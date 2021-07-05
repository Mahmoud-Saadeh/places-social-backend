const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imagePlace: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" }, // ref is for connecting the user model with the place model
  createdAt: { type: Date, default: new Date() },
  likes: { type: [String], default: [] },
});

module.exports = mongoose.model("Place", placeSchema);
