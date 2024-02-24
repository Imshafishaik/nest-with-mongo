import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Notes } from "./schemas/notes.schema";
import { Model } from "mongoose";
import { NotesDto, UpdateNotesDto } from "./dto/notes.dto";

@Injectable()
export class NotesService{
    constructor(@InjectModel(Notes.name) private readonly notesModel:Model<Notes>){}
        createNotes(notesDto:NotesDto){
            let newNotes = new this.notesModel(notesDto);
            console.log("newNOtes",newNotes)
            return newNotes.save()
        }

        getAllNotes(){
            // let allNotes = await this.notesModel();
            // let getNotes = await allNotes.find()
            return this.notesModel.find()
        }

        updateNotes(id: string,updateDto:UpdateNotesDto){
            return this.notesModel.findByIdAndUpdate(id,updateDto,{new:true})
        }

        deleteNotes(id:string){
            return this.notesModel.deleteOne({id})
        }
}