const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: String,

  email: String,

  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
  },

  busNumber: String,

  source: String,

  destination: String,

  seats: Number,

  fare: Number,

  totalAmount: Number,

}, {
  timestamps: true,
});

module.exports = mongoose.model("Booking", bookingSchema);