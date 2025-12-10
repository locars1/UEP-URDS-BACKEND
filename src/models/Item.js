// src/models/Item.js

class Item {
    constructor({ item_id, item_name, quarterly_budget, quarter, timestamp }) {
        this.item_id = item_id;
        this.item_name = item_name;
        this.quarterly_budget = quarterly_budget;
        this.quarter = quarter;
        this.timestamp = timestamp;
    }
}

export default Item;
