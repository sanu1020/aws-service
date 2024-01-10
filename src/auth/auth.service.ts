import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import { UserType } from "./type/user.type";
import { UserDto } from "./dto/user.dto";




@Injectable({})
export class AuthService {
    SignUp(dto:AuthDto) {
        console.log({dto})
        if(dto.password==='111'){
            return {msg: 'password is a number'}
        }

        return {msg:'hello you sign in'};
    }

    SignIn(){
        return {msg:"you sign up"};
    }

    private user: UserType[]=[
    {
        id: 1,
        name: "Sanujan",
        email:"sanujan@gmail.com",
    },
    {
        id: 2,
        name: "saravana",
        email:"saravana@gmail.com"
    },
    {
        id: 3,
        name: "anniya",
        email:"anniya@gmail.com"
    }
  ]
 
  CreateUser(user:UserDto){
    return this.user.push(user) 
}

    GetUsers(){
        return this.user
    }

    GetUserById(id:Number){
        return this.user.find((user)=>user.id === id)
    }
}