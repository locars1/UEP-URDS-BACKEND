// src/models/mooeContractLaborModel.js
export default class MooeContractLabor {
    constructor({
        mooe_contract_labor_id,
        budget_id,
        contract_date,
        nature_of_communication,
        purpose,
        quantity,
        estimated_cost,
        year,
        year_amount,
        year_total
    }) {
        this.mooe_contract_labor_id = mooe_contract_labor_id;
        this.budget_id = budget_id;
        this.contract_date = contract_date;
        this.nature_of_communication = nature_of_communication;
        this.purpose = purpose;
        this.quantity = quantity;
        this.estimated_cost = estimated_cost;
        this.year = year;
        this.year_amount = year_amount;
        this.year_total = year_total;
    }
}
