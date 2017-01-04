const rest = require('restler');
const searchAirport = require("../models/searchAirports");

class FetchApiData {


    /** 
    This is a description
    * @method doFetchSearchFlightDetails
    * @param {Array} locationLatLong - array
    * @return {Promise}  return  data called from API 
    */

    static doFetchSearchAirportApiData(locationLatLong) {
        return new Promise(
            (resolve, reject) => {
                //using restler (rest) to  call api - 'Airports with a 25 radiusmile' - locationLatLong argument is data from from previous promise used as parameters 
                rest.get(`https://api.flightstats.com/flex/airports/rest/v1/json/withinRadius/${locationLatLong[1]}/${locationLatLong[0]}/25?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047`).on('complete', function (airportResult) {
                    if (airportResult instanceof Error) {
                        // console.log('Error:', result.message);
                        reject(airportResult);
                    } else {
                        // make a new array
                        let airportArray = [];

                        // for each item in API data airports
                        for (let i in airportResult.airports) {
                            try {
                                // pass the JSON object to the model function in searchAirport
                                let airport = new searchAirport(airportResult.airports[i]);
                                // Once the validation of data has been approved insert the variable into the array
                                airportArray.push(airport);
                                //console.log(airportArray);
                            } catch (e) {

                            }
                        }
                        // const searchAirportRequest = new searchAirport(airportResult);
                        //console.log(result);
                        resolve(airportArray);
                    }
                });
            }
        )
    }
}

module.exports = FetchApiData;