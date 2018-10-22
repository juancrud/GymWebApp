export class User {
    id: number;
    identityId: string;
	type: UserType;
}

export enum UserType {
	Administrator = "Administrator",
	Trainer = "Trainer",
	Customer = "Customer"
}
