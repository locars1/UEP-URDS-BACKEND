// src/models/Travel.js

class Travel {
    constructor({
        travel_id,
        date,
        location,
        purpose,
        transport_mode,
        estimate_cost,
        year,
        timestamp
    }) {
        this.travel_id = travel_id;
        this.date = date;
        this.location = location;
        this.purpose = purpose;
        this.transport_mode = transport_mode;
        this.estimate_cost = estimate_cost;
        this.year = year;
        this.timestamp = timestamp;
    }
}

export default Travel;
