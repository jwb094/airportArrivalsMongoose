var mongoose = require('mongoose');

//create a new schema
var SearchAiportSchema = mongoose.Schema({
    searchTerm: String,
    searchResults: Array
});

//console.log(SearchAiportSchema);
//tell mongose to create a real model from our schema and export it
module.exports = mongoose.model('Airports', SearchAiportSchema);