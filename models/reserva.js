const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    hotel: { type: String, required: true }, // Hotel
    tipoHabitacion: { type: String, required: true }, // Tipo de habitación
    numeroHuespedes: { type: Number, required: true, min: 1 }, // Número de huéspedes
    fechaEntrada: { type: Date, required: true }, // Fecha de entrada
    fechaSalida: { type: Date, required: true }, // Fecha de salida
    estado: { type: String, enum: ['confirmada', 'cancelada'], default: 'confirmada' }, // Estado
    notas: { type: String }, // Notas adicionales
    serviciosAdicionales: { type: Array, default: [] } // Servicios adicionales
});

module.exports = mongoose.model('Reserva', reservationSchema);
