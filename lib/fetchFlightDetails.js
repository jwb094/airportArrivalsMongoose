const rest = require('restler');
const flightDetails = require("../models/flightDetails");

class FetchFlightDetailApiData {

    /** 
   This is a description
 * @method doFetchSearchFlightDetails
 * @param {Int} flightId - Integer
 * @return {Promise}  return  data called from api
 * collect all flight details of given flightID
 */

    static doFetchSearchFlightDetails(flightId) {
        return new Promise(
            (resolve, reject) => {
                // calling the API with the arugements flightId as part of their parameters
                rest.get(`https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${flightId}?appId=210fea33&appKey=c728ab5db81d7611d6deec2d00a17047`).on('complete', function (flightResult) {
                    // paramter flightDetailsResult respresents JSON Object from API call
                    if (flightResult instanceof Error) {
                        // console.log('Error:', result.message);
                        reject(Error);
                    } else {
                        /* this code is suppose to go to the model class searchFlightDetails
                           for each object in the JSON Object  
                           instanciate a new Object in searchFlightDetails model 
                           the new object created in inserted into  array which will be resolved in the promise
                        */
                        let flightArray = [];

                        for (let i in flightResult.flightStatus) {
                             //console.log(flightResult.flightStatus[i]);
                            try {
                                let flightDetails = new flightDetails(flightResult.flightStatus[i]);
                                //console.log(flightDetails);
                                flightArray.push(flightDetails);
                                console.log(flightArray);
                            } catch (e) {

                            }
                        }

                        //console.log(flightDetailsArray);
                        resolve(flightResult);
                        // resolve(flightArray);
                    }
                });
            }
        )
    }
}

module.exports = FetchFlightDetailApiData;