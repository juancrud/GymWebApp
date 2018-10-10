import { ExerciseCategory } from "./ExerciseCategory";

export class Exercise {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    status: ExerciseStatus;
	exerciseCategory: ExerciseCategory;
}

export enum ExerciseStatus {
	Active = "Active",
	Inactive = "Inactive",
	Deleted = "Deleted"
}
