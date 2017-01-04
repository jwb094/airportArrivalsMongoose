const flightDetailsDatabase = require('../models/searchFlightDetailsDatabase');

class DbAirportArrivalsFile {

    static save(req, result) {
        return new Promise(
            (resolve, reject) => {
                //create a new document in a  collection in the database searchterm = e.g. london searchResults = e.g. model data from api
                flightDetailsDatabase.create({ searchFlightIdTerm: req.body.flight, searchFlightDetailsResults: result }, function (err, res) {
                    //check for errors and return 500 error and message if found
                    if (err) {
                        reject(err);
                    } else {
                        console.log(result);
                        resolve(result);

                    }

                });
            }
        )
    }

}

module.exports = DbAirportArrivalsFile;