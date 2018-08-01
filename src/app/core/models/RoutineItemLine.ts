import { Exercise } from "./Exercise";

export class RoutineItemLine {
    id: number;
    series: number;
    repetitions: number;
    restTime: number;
    weight: number;
    duration: number;
    comments: string;
    exercise: Exercise;
}
