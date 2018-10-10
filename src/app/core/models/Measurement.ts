export class Measurement {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    status: MeasurementStatus;
}

export enum MeasurementStatus {
	Active = "Active",
	Inactive = "Inactive",
	Deleted = "Deleted"
}
