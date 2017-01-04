const express = require('express');
const router = express.Router();
const displayPageController = require('../controllers/displayPagesController');

router.get("/",displayPageController.airportSection)

//uses req.body.airport
router.get("/arrivals/:airport", displayPageController.showAirports);

router.get("/flightDetails/:flight", displayPageController.showFlightData);

router.get("/backToHomePage", displayPageController.backToHomePage);

module.exports = router;