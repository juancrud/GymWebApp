export class Measurement {
    id: number;
    name: string;
    description: string;
    status: MeasurementStatus;
}

export enum MeasurementStatus {
	Active = "Active",
	Inactive = "Inactive",
	Deleted = "Deleted"
}
