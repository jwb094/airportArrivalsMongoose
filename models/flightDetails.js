class FlightDetails {

    //obj - JSON Object from API call
    constructor(obj) {
        //console.log(obj);
        if (!obj.hasOwnProperty('flightId')) {
            throw new Error("Missing flightId");
        } else {
            this.flightId = obj.flightId;
        }


        // if (!obj.hasOwnProperty('carrierFsCode')) {
        //     throw new Error("Missing carrierFsCode");
        // } else {
        //     this.carrierCode = obj.carrierFsCode;
        // }

        // if (!obj.hasOwnProperty('flightNumber')) {
        //     throw new Error("Missing flightNumber");
        // } else {
        //     this.flightNumber = obj.flightNumber;
        // }

        // if (!obj.hasOwnProperty('departureAirportFsCode')) {
        //     throw new Error("Missing departureAirportFsCode");
        // } else {
        //     this.departureAirportCode = obj.departureAirportFsCode;
        // }

        // if (!obj.hasOwnProperty('arrivalAirportFsCode')) {
        //     throw new Error("Missing arrivalAirportFsCode");
        // } else {
        //     this.arrivalAirportCode = obj.arrivalAirportFsCode;

        // }

        // if (!obj.hasOwnProperty('arrivalDate')) {
        //     throw new Error("Missing arrivalDate");
        // } else {
        //     this.date = obj.arrivalDate.dateLocal;
        // }

        // if (!obj.hasOwnProperty('airportResources')) {
        //     throw new Error("Missing airportResources");
        // } else {
        //     this.arrivalTerminal = obj.airportResources.arrivalTerminal;


        // }

    }

}

module.exports = FlightDetails;