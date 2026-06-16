const Booking = require("../models/Booking");

const getBookings = async (req, res) => {
  try {

    const { email } = req.query;

    const bookings = await Booking.find({ email });

    res.status(200).json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
const createBooking = async (req, res) => {

  try {

    const booking = await Booking.create(req.body);

    res.status(201).json(booking);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getBookings,
  createBooking,
};