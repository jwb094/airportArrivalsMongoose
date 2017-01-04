var mongoose = require('mongoose');

//create a new schema
var SearchAiportArrivalsSchema = mongoose.Schema({
    searchIataCodeTerm: String,
    searchArrivalsResults: Array
});

//console.log(SearchAiportSchema);
//tell mongose to create a real model from our schema and export it
module.exports = mongoose.model('AirportsArrivals', SearchAiportArrivalsSchema);