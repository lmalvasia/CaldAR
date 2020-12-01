const express = require('express');
const appointmentsController = require('../controllers/appointmentsController');

const router = express.Router();

// FIND ALL APPOINTMENTS
router.get('/', appointmentsController.findAll);

// FIND APPOINTMENTS BY ID
router.get('/:id', appointmentsController.findById);

// CREATE APPOINTMENTS
router.post('/', appointmentsController.createAppointment);

module.exports = router;