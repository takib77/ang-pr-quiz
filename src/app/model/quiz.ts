import { Question } from "./question";

export class Quiz {
    id: number = 0;
    title: string = '';
    description: string = '';
    question: number = 0;
    // question: Question = new Question();
    active: boolean = false;
}
