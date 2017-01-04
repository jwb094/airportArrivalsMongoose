const DbFetchAirportArrivals = require("../lib/dbFetchAirportArrivals");
const DbFetchFlightDetails = require("../lib/dbFetchFlightDetails");
const moment = require('moment');


class PageController {
  /**
 * This is a description
 * @method airportsection
 * @param {String} req - url link:/ string
 * @param {String} res -  string
 * @return {Object} return render index.ejs page  in posts default directory views
 */
  static airportSection(req, res) {
    res.render("posts/index")
  }

  /** 
  This is a description
* @method showAirports
* @param {String} req - url link:/arrivals string
* @param {String} res -  string
* @return {Object} return session object arrivaldetails in 
* render arrivals.ejs page in posts default directory views
*/
  static showAirports(req, res) {
   // console.log(req.params.airport);
    DbFetchAirportArrivals.find(req.params.airport)
      .then(result => {
        res.render("posts/arrivals", {
          // session object is stored in the page
          arrivaldetails: result[0].searchArrivalsResults,
          moment:moment
        });
      })
      .catch(err => {
          console.log(err);  
        });
  }

  /** 
   This is a description
 * @method showFlightData
 * @param {String} req - url link:/flightDetails string
 * @param {String} res -  string
 * @return {Object}  return session object flightdetails 
 * render flightDetails.ejs page in posts default directory views
 */
  static showFlightData(req, res) {
    //the req.params.flight - flightID:830235676 will be used as a parameter
    //criteria for retrieving the data back from the databack
     DbFetchFlightDetails.find(req.params.flight)
      .then(result => {
    res.render("posts/flightDetails", {
      flightdetails: result[0].searchFlightDetailsResults,
      moment:moment
    });
      })
      .catch(err => {
          console.log(err);  
        });
  }

  static backToHomePage(req, res) {
    res.render("posts/index", {
    });
  }



}

module.exports = PageController;