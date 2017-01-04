const FetchLatLong = require("../lib/fetchLocationLatandLong");
const FetchSearchAirportApiData = require("../lib/fetchSearchAirportsApiData");
const FetchAirportArrivalsApiData = require("../lib/fetchAirportArrivals");
const FetchFlightDetailsApiData = require("../lib/fetchFlightDetails");
const DbSaveSearchAirport = require("../lib/dbSaveSearchAirport");
const DbSaveAirportArrivals = require("../lib/dbSaveAirportArrivals");
const DbFetchSearchAirport = require("../lib/dbFetchAirport");
const DbSaveFlightDetails = require("../lib/dbSaveFlightDetails");







class Airport {
    /**
    * This is a description
    * @method search
    * @param {String} req - req.body.name string
    * @param {String} res -  string
    * @return {Promise} return JSON Object OF Airport
    */
    static search(req, res) {
        let searchResult;
        //Fetch the lat and long from input data from front end (textfield)
        FetchLatLong.doFetchData(req.body.city).then(result => {
            //returns result and pass as arguements in next function
            return FetchSearchAirportApiData.doFetchSearchAirportApiData(result);
        })
            //create a new collection and document in mongoDatabase
            .then(result => {
                //uses the result from doFetchSearchAirportApiData function to store data in database
                return DbSaveSearchAirport.save(req, result);
            })
            //retrieves the document from collection in database by name
            .then(() => {
                //retrieve all the data from the database
                return DbFetchSearchAirport.find();
            })
            // the result is now sent to page
            .then((result) => {
                res.status(200).send({
                    //key: result   -   value: API JSON Object 
                    result: result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    /**
    * @method getAirportArrivalData
    * @param {String} req - req.body.airport string
    * @param {String} res -  string
    * @return {Promise} return JSON Object of Airport Arrival details
    */
    static getAirportArrivalData(req, res) {
        //fetch the airport arrival data from api using input from front end as argument
        FetchAirportArrivalsApiData.doFetchSearchAirportArrivalsApiData(req.body.airport)
            //save the api data into a database
            .then(result => {
                return DbSaveAirportArrivals.save(req, result);
            })
            //with the result
            .then(result => {
                // sends the JSON object to the page
                res.status(200).send({ result: result.searchArrivalsResults });
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
    }

    /**
    * This is a description
    * @method doFetchSearchFlightDetails
    * @param {String} req - req.body.flight string
    * @param {String} res -  string
    * @return {Promise} return JSON Object of Individual flight details
    */
    static getFlightData(req, res) {
        //fetch the flight details data from api using input from front end as arguments
        FetchFlightDetailsApiData.doFetchSearchFlightDetails(req.body.flight)
            .then(result => {
                return DbSaveFlightDetails.save(req, result);
            })
            .then(result => {
                //the result from api data will stored as a  JSON object
                //The JSON object will sent to the ejs page.
                res.status(200).send({ result: result.searchFlightDetailsResults });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }

}
module.exports = Airport;