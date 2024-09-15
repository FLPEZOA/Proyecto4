//Se importa el framework express
const express = require('express');

//se crea objeto enrutador para la aplicación
const router = express.Router();
const {
    createReservation,
    getAllReservations,
    getReservationById,
    updateReservation,
    deleteReservation,
    searchReservations,
} = require('../controllers/reservationController');

//se definen las rutas y se invocan funciones según la solicitud
router.post('/', createReservation);
router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.put('/:id', updateReservation);
router.delete('/reservas/:id', deleteReservation);

module.exports = router;




