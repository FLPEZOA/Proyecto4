
const express = require('express');

const router = express.Router();
const {
    crearReserva,
    obtenerTodasLasReservas,
    obtenerReservaPorId,
    actualizarReserva,
    eliminarReserva,
    buscarReservas,
} = require('../controllers/reservationController');


router.post('/', crearReserva);
router.get('/', obtenerTodasLasReservas);
router.get('/search', buscarReservas);
router.get('/:id', obtenerReservaPorId);
router.put('/:id', actualizarReserva);
router.delete('/:id', eliminarReserva);

module.exports = router;




