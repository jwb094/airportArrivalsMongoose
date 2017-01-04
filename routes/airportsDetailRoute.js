const express = require('express');
const router = express.Router();
const airportDetailController = require('../controllers/airportArrivalsDetailsController');


/* API CALLS */

// call method airportDetailController.search to search for Airports 
router.post("/search", airportDetailController.search);
// call method airportDetailController.getAirportArrivalData to search for airpirt arrivals
router.post("/set-arrivals", airportDetailController.getAirportArrivalData);
// call method airportDetailController.getFlightData search for 
router.post("/set-details", airportDetailController.getFlightData);


module.exports = router;