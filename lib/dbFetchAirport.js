const airportDb = require('../models/searchAirportDatabase');

class DbFetchAirports {

    static find() {
        return new Promise(
            (resolve, reject) => {
                //create a new document in a  collection in the database searchterm = e.g. london searchResults = e.g. model data from api
                airportDb.find({}, function (err, res) {
                    //check for errors and return 500 error and message if found
                    if (err) {
                        reject(err);
                    } else {
                        //console.log(res);
                        resolve(res);
                        
                }


                });
            }
        )
    }

}

module.exports = DbFetchAirports;