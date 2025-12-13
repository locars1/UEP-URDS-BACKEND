// src/models/mooeEquipmentOutlayModel.js
export default class MooeEquipmentOutlay {
    constructor({
        mooe_equipment_outlay_id,
        budget_id,
        equip_date,
        unit,
        item_description,
        purpose,
        quantity,
        estimated_cost,
        year,
        year_amount,
        year_total
    }) {
        this.mooe_equipment_outlay_id = mooe_equipment_outlay_id;
        this.budget_id = budget_id;
        this.equip_date = equip_date;
        this.unit = unit;
        this.item_description = item_description;
        this.purpose = purpose;
        this.quantity = quantity;
        this.estimated_cost = estimated_cost;
        this.year = year;
        this.year_amount = year_amount;
        this.year_total = year_total;
    }
}
