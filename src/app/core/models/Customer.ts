export class Customer {
    id: number;
    documentId: number;
    name: string;
	gender: string;
	birthDay: Date;
	address: string;
	emailAddress: string;
	phoneNumber: number;
	height: number;
	status: CustomerStatus;
	imageUrl: string;
}

export enum CustomerStatus {
	Active = "Active",
	Inactive = "Inactive",
	Deleted = "Deleted"
}
