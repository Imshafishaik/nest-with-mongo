import { IsNotEmpty, IsNumber, IsString, isString } from "class-validator";

export class NotesDto{
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsString()
    author?: string;

    @IsNumber()
    age: number;

    @IsNumber()
    likes: number;
}

export class UpdateNotesDto{
    name: string;

    author: string;

    age: number;

    likes: number;
}