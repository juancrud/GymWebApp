import { Trainer } from "./Trainer";
import { Customer } from "./Customer";
import { MeasurementItem } from "./MeasurementItem";

export class Routine {
    id: number;
    date: Date;
    objectives: string;
    comments: string;
    trainer: Trainer;
    customer: Customer;
    measurementItem: MeasurementItem;
}
