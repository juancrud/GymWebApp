import { Exercise } from "./Exercise";

export class ExerciseCategory {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    status: ExerciseCategoryStatus;
    exercises: Exercise[];
}

export enum ExerciseCategoryStatus {
	Active = "Active",
	Inactive = "Inactive",
	Deleted = "Deleted"
}
