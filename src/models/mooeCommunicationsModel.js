// src/models/mooeCommunicationsModel.js
export default class MooeCommunication {
    constructor({
        mooe_communication_id,
        budget_id,
        communication_date,
        nature_of_communication,
        purpose,
        quantity,
        estimated_cost,
        year,
        year_amount,
        year_total
    }) {
        this.mooe_communication_id = mooe_communication_id;
        this.budget_id = budget_id;
        this.communication_date = communication_date;
        this.nature_of_communication = nature_of_communication;
        this.purpose = purpose;
        this.quantity = quantity;
        this.estimated_cost = estimated_cost;
        this.year = year;
        this.year_amount = year_amount;
        this.year_total = year_total;
    }
}
