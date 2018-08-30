export class Trainer {
    id: number;
    documentId: number;
	name: string;
	gender: string;
	birthDay: Date;
	address: string;
	emailAddress: string;
	phoneNumber: number;
	status: TrainerStatus;
	imageUrl: string;
}

export enum TrainerStatus {
	Active = "Active",
	Inactive = "Inactive",
	Deleted = "Deleted"
}
