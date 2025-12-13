// models/workplanScheduleModel.js

export default class WorkplanSchedule {
    constructor(schedule) {
        this.activity_id = schedule.activity_id;
        this.year_number = schedule.year_number;
        this.boolean_q1 = schedule.boolean_q1;
        this.boolean_q2 = schedule.boolean_q2;
        this.boolean_q3 = schedule.boolean_q3;
        this.boolean_q4 = schedule.boolean_q4;
    }
}
