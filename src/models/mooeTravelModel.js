// src/models/mooeTravelModel.js
export default class MooeTravel {
    constructor({
        mooe_travel_id,
        budget_id,
        travel_date,
        places_to_be_visited,
        purpose_of_travel,
        mode_of_transport,
        estimated_cost,
        year_num,
        year_amount,
        year_total
    }) {
        this.mooe_travel_id = mooe_travel_id;
        this.budget_id = budget_id;
        this.travel_date = travel_date;
        this.places_to_be_visited = places_to_be_visited;
        this.purpose_of_travel = purpose_of_travel;
        this.mode_of_transport = mode_of_transport;
        this.estimated_cost = estimated_cost;
        this.year_num = year_num;
        this.year_amount = year_amount;
        this.year_total = year_total;
    }
}
