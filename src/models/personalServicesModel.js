// src/models/personalServicesModel.js
export default class PersonalService {
    constructor({ personal_service_id, budget_id, item_name, year_number, quarter, quarter_amount, year_amount, year_total }) {
        this.personal_service_id = personal_service_id;
        this.budget_id = budget_id;
        this.item_name = item_name;
        this.year_number = year_number;
        this.quarter = quarter;
        this.quarter_amount = quarter_amount;
        this.year_amount = year_amount;
        this.year_total = year_total;
    }
}
