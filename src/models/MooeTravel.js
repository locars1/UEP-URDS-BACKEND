// src/models/MooeTravel.js

class MooeTravel {
    constructor({ mooe_travel_id, travel_id, annual_budget, timestamp }) {
        this.mooe_travel_id = mooe_travel_id;
        this.travel_id = travel_id;
        this.annual_budget = annual_budget;
        this.timestamp = timestamp;
    }
}

export default MooeTravel;
