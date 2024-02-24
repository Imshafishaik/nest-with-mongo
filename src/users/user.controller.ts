import { Body, Controller, Post, Get, Param,Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";

@Controller('users')
export class UserController{
    constructor(private userService: UserService){}
    @Post()
    createUser(@Body() userdto: UserDto){
        return this.userService.createUser(userdto)
    }

    @Get()
    getUser(){
        return this.userService.getUser()
    }

    @Get('/all-users-with-notes')
    getUsersWithNotes(){
        return this.userService.getUsersWithNotes()
    }

    @Get('/search-users')
    getSearchedUsers(@Query() search: string){
        console.log(search)
        return this.userService.getSearchedUsers(search)
    }

    @Get('/sort-by-age')
    getSortByAge(){
        return this.userService.getSortByAge()
    }
}