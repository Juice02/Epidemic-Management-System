const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  booking_id:{ type: Number, required: true },
  username: { type: String, required: true },
  adharcard: { type: Number, required: true,minlength: 12,maxlength: 12 },
  hospital_name: { type: String, required: true },
  date: { type: String, required: true },
  slot_number: { type: String, required: true },
}, {
  timestamps: true,
});

const booking = mongoose.model('booking', BookingSchema);

module.exports = booking;