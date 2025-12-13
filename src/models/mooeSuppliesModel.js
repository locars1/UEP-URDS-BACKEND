// src/models/mooeSuppliesModel.js
export default class MooeSupplies {
    constructor({
        mooe_supply_id,
        budget_id,
        supply_date,
        unit,
        item_description,
        purpose,
        quantity,
        unit_cost,
        year,
        year_amount,
        year_total
    }) {
        this.mooe_supply_id = mooe_supply_id;
        this.budget_id = budget_id;
        this.supply_date = supply_date;
        this.unit = unit;
        this.item_description = item_description;
        this.purpose = purpose;
        this.quantity = quantity;
        this.unit_cost = unit_cost;
        this.year = year;
        this.year_amount = year_amount;
        this.year_total = year_total;
    }
}
