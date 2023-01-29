const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Vacc_BookingSchema = new Schema({
  username: { type: String, required: true },
  adharcard: { type: Number, required: true,minlength: 12,maxlength: 12 },
  hospital_name: { type: String, required: true },
  date: { type: Date, required: true },
  slot_number: { type: String, required: true },
}, {
  timestamps: true,
});

const Vacc_Booking = mongoose.model('Vacc_Booking', Vacc_BookingSchema);

module.exports = Vacc_Booking;