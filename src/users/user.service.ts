import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User,UserSchema} from "./schema/user.schema";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private readonly userModel:Model<User>){}

    async createUser(user:UserDto):Promise<User>{
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    getUser(){
        const allUsers = this.userModel.find()
        return allUsers;
    }

    getUsersWithNotes(){
        // const usersWithNotes =
        return this.userModel.aggregate([
            {
                $lookup:{
                    from:"notes",
                    localField:"myage",
                    foreignField:"age",
                    as:"notes"
                }
            },
            // {
            //     $unwind:"$notes"
            // }    
        ])
        // console.log("............usersWithNotes",usersWithNotes);
        
    }

    getSearchedUsers(searchTerm:string){
        console.log(searchTerm)
        return this.userModel.aggregate([
            {
                $match:{
                    username: searchTerm.search
                }
            }
        ])
    }

    getSortByAge(){
        return this.userModel.aggregate([
            {
                $sort:{ myage: -1 }
            }
        ])
    }
}