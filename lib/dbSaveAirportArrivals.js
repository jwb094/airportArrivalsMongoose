const airportArrivalDatabase = require('../models/searchAirportArrivalsDatabase');

class DbAirportArrivalsFile {

    static save(req, result) {
        return new Promise(
            (resolve, reject) => {
                //create a new document in a  collection in the database searchterm = e.g. london searchResults = e.g. model data from api
                airportArrivalDatabase.create({ searchIataCodeTerm: req.body.airport, searchArrivalsResults: result }, function (err, airportArrivalsDatabase) {
                    //check for errors and return 500 error and message if found
                    if (err) {
                        reject(err);
                    } else {
                        
                        resolve(result);

                    }

                });
            }
        )
    }

}

module.exports = DbAirportArrivalsFile;