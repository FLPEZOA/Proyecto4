const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    hotel: { type: String, required: true },
    roomType: { type: String, required: true },
    numberOfGuests: { type: Number, required: true, min: 1 },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'canceled'], default: 'confirmed' },
    notes: { type: String },
    extraServices: { type: Array, default: [] }
});

module.exports = mongoose.model('Reservation', reservationSchema);
