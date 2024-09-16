const Reserva = require('../models/reserva');

// 1. Crear una nueva reserva
const crearReserva = async (req, res) => {
    try {
        const { hotel, tipoHabitacion, numeroHuespedes, fechaEntrada, fechaSalida, estado, notas } = req.body;
        const nuevaReserva = new Reserva({
            hotel,
            tipoHabitacion,
            numeroHuespedes,
            fechaEntrada,
            fechaSalida,
            estado,
            notas
        });

        await nuevaReserva.save();

        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. Obtener todas las reservas
const obtenerTodasLasReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. Obtener una reserva específica
const obtenerReservaPorId = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. Actualizar información de una reserva
const actualizarReserva = async (req, res) => {
    try {
        const reservaActualizada = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reservaActualizada) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.json(reservaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Eliminar una reserva
const eliminarReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByIdAndDelete(req.params.id);
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.json({ message: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 6. Búsqueda de reservas por criterios
const buscarReservas = async (req, res) => {
    const { hotel, tipoHabitacion, fechaEntrada, fechaSalida, estado, numeroHuespedes } = req.query;
    const filtros = {};

    // Filtrar por hotel
    if (hotel) {
        filtros.hotel = { $regex: hotel, $options: "i" };
    }

    // Filtrar por tipo de habitación
    if (tipoHabitacion) {
        filtros.tipoHabitacion = { $regex: tipoHabitacion, $options: "i" };
    }

    // Filtrar por número de huéspedes
    if (numeroHuespedes) {
        filtros.numeroHuespedes = { $gte: numeroHuespedes };
    }

    // Filtrar por rango de fechas
    if (fechaEntrada || fechaSalida) {
        if (fechaEntrada && fechaSalida) {
            filtros.fechaEntrada = { $gte: new Date(fechaEntrada) };
            filtros.fechaSalida = { $lte: new Date(fechaSalida) };
        } else if (fechaEntrada) {
            filtros.fechaEntrada = { $gte: new Date(fechaEntrada) };
        } else if (fechaSalida) {
            filtros.fechaSalida = { $lte: new Date(fechaSalida) };
        }
    }

    // Filtrar por estado
    if (estado) {
        filtros.estado = estado;
    }

    try {
        const reservas = await Reserva.find(filtros);
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    crearReserva,
    obtenerTodasLasReservas,
    obtenerReservaPorId,
    actualizarReserva,
    eliminarReserva,
    buscarReservas,
}
