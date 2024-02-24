import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NoteSchema, Notes } from "./schemas/notes.schema";
import { NotesService } from "./notes.service";
import { NotesController } from "./notes.controller";

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:Notes.name,
            schema: NoteSchema,
        }])
    ],
    controllers:[NotesController],
    providers:[NotesService]
})

export class NotesModule{}