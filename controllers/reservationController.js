const Reservation = require('../models/reservation');

// 1. Crear una nueva reserva
const createReservation = async (req, res) => {
    try {
        const { hotel, roomType, numberOfGuests, checkIn, checkOut, status, notes } = req.body;

        const newReservation = new Reservation({
            hotel,
            roomType,
            numberOfGuests,
            checkIn,
            checkOut,
            status,
            notes
        });

        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 2. Obtener todas las reservas
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find(); // Asegúrate de que esto esté en una función async
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. Obtener una reserva específica
const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. Actualizar información de una reserva
const updateReservation = async (req, res) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReservation) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.json(updatedReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// 5. Eliminar una reserva
const deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.json({ message: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 6. Búsqueda de reservas por criterios
const searchReservations = async (req, res) => {
    const { hotel, roomType, checkIn, checkOut, status, numberOfGuests } = req.query;
    const filters = {};

    // Filtrar por hotel
    if (hotel) {
        filters.hotel = { $regex: hotel, $options: "i" }; // Búsqueda insensible a mayúsculas
    }

    // Filtrar por tipo de habitación
    if (roomType) {
        filters.roomType = { $regex: roomType, $options: "i" };
    }

    // Filtrar por número de huéspedes
    if (numberOfGuests) {
        filters.numberOfGuests = { $gte: numberOfGuests }; // Buscar huéspedes mayor o igual que
    }

    // Filtrar por rango de fechas (checkIn y checkOut)
    if (checkIn || checkOut) {
        if (checkIn && checkOut) {
            filters.checkIn = { $gte: new Date(checkIn) };
            filters.checkOut = { $lte: new Date(checkOut) };
        } else if (checkIn) {
            filters.checkIn = { $gte: new Date(checkIn) };
        } else if (checkOut) {
            filters.checkOut = { $lte: new Date(checkOut) };
        }
    }

    // Filtrar por estado
    if (status) {
        filters.status = status;
    }

    try {
        const reservations = await Reservation.find(filters);
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    deleteReservation,
    searchReservations,
}
