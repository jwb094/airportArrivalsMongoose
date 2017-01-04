const flightDetailsDb = require('../models/searchFlightDetailsDatabase');

class DbFlightDetails {

    static find(flightId) {
        return new Promise(
            (resolve, reject) => {
                //create a new document in a  collection in the database searchterm = e.g. london searchResults = e.g. model data from api
                flightDetailsDb.find({ searchFlightIdTerm: flightId }, function (err, res) {
                    //check for errors and return 500 error and message if found
                    if (err) {
                        reject(err);
                    } else {
                        //console.log(res[0].searchFlightDetailsResults);
                        resolve(res);

                    }


                });
            }
        )
    }

}

module.exports = DbFlightDetails;