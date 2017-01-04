const airportArrivalsDb = require('../models/searchAirportArrivalsDatabase');

class DbFetchAirportsArrivals {

    static find(airportIataCode) {

        return new Promise(
            (resolve, reject) => {

                //find a document in a collection in arrival database using criteria of airportIataCode 
                airportArrivalsDb.find({ searchIataCodeTerm: airportIataCode }, function (err, res) {
                    //check for errors and return 500 error and message if found
                    if (err) {
                        reject(err);
                    } else {
                        //if there're no errors that resolve the result
                        resolve(res);

                    }
                });
            }
        )
    }

}

module.exports = DbFetchAirportsArrivals;