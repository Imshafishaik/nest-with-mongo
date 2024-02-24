import { Body, Controller, Post,Get,Param, UsePipes, ValidationPipe, Put, Delete } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { NotesDto, UpdateNotesDto } from "./dto/notes.dto";

@Controller('notes')
export class NotesController{

    constructor(private notesService:NotesService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createNotes(@Body() notesDto : NotesDto){
        console.log(notesDto)
        return this.notesService.createNotes(notesDto)
    }

    @Get()
    getAllNotes(){
        return this.notesService.getAllNotes();
    }

    @Put(':id')
    updateNotes(@Param('id') id: string, @Body() updateDto: UpdateNotesDto){
        return this.notesService.updateNotes(id, updateDto)
    }

    @Delete(':id')
    deleteNotes(@Param('id') id:string){
        return this.notesService.deleteNotes(id)
    }
}