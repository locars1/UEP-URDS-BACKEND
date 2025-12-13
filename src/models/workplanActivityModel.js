// models/workplanActivityModel.js

export default class WorkplanActivity {
    constructor(activity) {
        this.workplan_id = activity.workplan_id;
        this.activity_number = activity.activity_number;
        this.text_description = activity.text_description;
    }
}
