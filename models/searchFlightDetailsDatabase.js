var mongoose = require('mongoose');

//create a new schema
var FlightDetailsSchema = mongoose.Schema({
    searchFlightIdTerm: Number,
    searchFlightDetailsResults: Array
});

//console.log(SearchAiportSchema);
//tell mongose to create a real model from our schema and export it
module.exports = mongoose.model('FlightDetails', FlightDetailsSchema);