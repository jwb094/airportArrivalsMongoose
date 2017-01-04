const searchAirportDatabase = require('../models/searchAirportDatabase');

class DbFile {

    static save(req, result) {
        return new Promise(
            (resolve, reject) => {
                //create a new document in a  collection in the database searchterm = e.g. london searchResults = e.g. model data from api
                searchAirportDatabase.create({ searchTerm: req.body.city, searchResults: result }, function (err, airportDatabase) {
                    //check for errors and return 500 error and message if found
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }

                });
            }
        )
    }

}

module.exports = DbFile;