import { Customer } from "./Customer";
import { Trainer } from "./Trainer";
import { Routine } from "./Routine";
import { MeasurementItemLine } from "./MeasurementItemLine";

export class MeasurementItem {
    id: number;
    date: Date;
	comments: string;
	trainer: Trainer;
	customer: Customer;
	measurementItemLines: MeasurementItemLine[];
	routine: Routine;
}
