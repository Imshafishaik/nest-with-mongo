import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Notes{
    @Prop({unique:true, required:true})
    name?:string;
    
    @Prop({required:true})
    author?:string;

    @Prop({required:true})
    age?:number;

    @Prop({required:true})
    likes: number
}


export const NoteSchema = SchemaFactory.createForClass(Notes)